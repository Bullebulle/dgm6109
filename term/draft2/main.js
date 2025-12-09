"use strict"

let svgWidth = 1200
let svgHeight = 950
let margin = {
    top: 100,
    right: 30,
    bottom: 60,
    left: 80
}

let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

    svg.append("rect")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("fill", "none")
    .attr("stroke", "black")

/*Add Title*/
svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", 60)  
    .attr("text-anchor", "middle")
    .style("font-size", "32px")
    .style("font-weight", "bold")
    .style("fill", "#2c3e50")
    .style("font-family", "Arial, sans-serif")
    .text("Phone Usage Analysis During Toilet Sessions");

let viz = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`)


/*Global Variables*/
let data, /*The dataset loaded from the JSON file and used throughout the visualization.*/
xAxis, /*SVG group element representing the X-axis, useful for referencing or updating. */
yAxis, /*SVG group element representing the Y-axis, useful for referencing or updating.*/ 
xScale, /*D3 scale that maps the phone attractiveness level (0–10) to the X-position on the chart.*/
yScale, /*D3 scale that maps toilet duration (0–30 minutes) to the Y-position on the chart.*/
rScale; /* D3 scale that maps emotionScore to the circle radius in the scatterplot.*/


/*Load data from "record.json"*/
(async function () {
    data = await d3.json("record.json").then(buildVisualization)
    console.log("here")
})();


function buildVisualization(data) { 
    let renderData = organizeData(data); /*organize the data (sort, clean, etc.).*/
    buildScales(renderData); /*Set the scale based on the compiled data.*/
    drawVisualization(renderData, viz);/*Draw the graph (draw points, axes, and legend)*/
    return data;/*Return the original data*/
}
/*This function is for x axis , y axis and radius, to spread their origin data evently across the axis and Pixels*/
function buildScales(data) {
     /* x axis: phoneAttractivenessLevel 0-10 */
    xScale = d3.scaleLinear()
        .domain([0, 10])
        .range([0, svgWidth - (margin.left + margin.right)]);/*Pixel range for the x-axis inside the margins*/
    
    /* Y-axis: Toilet duration 0-30 */
    yScale = d3.scaleLinear()
        .domain([0, 30])
        .range([svgHeight - (margin.top + margin.bottom), 0]);
    
    /* Emotion score range in level 1-30 */
    rScale = d3.scaleSqrt() /*Use a square-root scale so circle size grows more gently as emotion increases*/
        .domain([0, 10]) /* Input data range (emotion score)*/
        .range([1, 30]);   /*Range of the mapped circle radiu*/
}
/*This function sorts the data by emotionScore from largest to smallest to avoid overlap*/
function organizeData(data) { 
    data.sort(function(a, b) {
        return b.emotionScore - a.emotionScore;
    });
    return data;
}

/*This function is responsible for drawing all the graphics onto the SVG, such as scatter plots, axes, and legends.

* It uses the previously created scale (xScale, yScale, rScale) to determine the position and size of the circles.*/
function drawVisualization(data, drawing) {

    /* calculate average values, reference: https://www.geeksforgeeks.org/javascript/d3-js-d3-mean-function/*/
    /* For each record d in the data array, extract phoneAttractivenessLevel and calculate the average value across all records */
    let meanAttractiveness = d3.mean(data, function(d) { /*function(d) is a callback function. For each record in the data array, D3 passes that record into the function as d.*/
        return d.phoneAttractivenessLevel;
    });

    let meanDuration = d3.mean(data, function(d) {
        return d.duration;
    });

    /* vertical line: average phone attractiveness */
    drawing.append("line")
        .attr("x1", xScale(meanAttractiveness))
        .attr("y1", yScale(0))
        .attr("x2", xScale(meanAttractiveness))
        .attr("y2", yScale(30))
        .attr("stroke", "gray")
        .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", "4,4");

    /* label for average attractiveness */
    drawing.append("text")
        .attr("x", xScale(meanAttractiveness))
        .attr("y", yScale(30) - 10)
        .attr("text-anchor", "middle")
        .style("font-size", "10px")
        .text("Average phone attractiveness");

        /* horizontal line: average toilet duration */
    drawing.append("line")
        .attr("x1", xScale(0))
        .attr("y1", yScale(meanDuration))
        .attr("x2", xScale(10))
        .attr("y2", yScale(meanDuration))
        .attr("stroke", "gray")
        .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", "4,4");

    /* label for average duration */
    drawing.append("text")
        .attr("x", xScale(9) + 5)
        .attr("y", yScale(meanDuration) +10)
        .attr("text-anchor", "start")
        .style("font-size", "10px")
        .text("Average duration");

 /* Draw circles - Turn each data point into a circle. */
    drawing.selectAll("circle.dataPoint")/*tag each circle as a data point*/
        .data(data)  /*Bind data to circle，one data point match to one circle*/
        .join("circle")/*If a circle does not exist, create one.*/
        .classed("dataPoint", true) /*Add a class to each circle for easy labeling.*/
        .attr("r", function(value) {
            return rScale(value.emotionScore);  /* r = emotion score */
        })
        .attr("cx", function(value) { 
            return xScale(value.phoneAttractivenessLevel);  /* map value.phoneAttractivenessLevel through xScale to convert it into an x-pixel position */
        })
        .attr("cy", function(value) {
            return yScale(value.duration);  /* Y-axis = duration */
        })
        .attr("fill", function(value){ 
            /* color = contentType */
            if (value.contentType === "news") {
                return "blue";
            }
            if (value.contentType === "socialMedia") {
                return "orange";
            }
            if (value.contentType === "game") {
                return "pink";
            }
            if (value.contentType === "none") {
                return "gray";
            }
            return "red";  /* if there are any other type, return red */
        })
        .attr("stroke", "black")  
        .attr("stroke-width", 0.5) 
        .attr("opacity", "0.7"); 

    /* content type legend group */
    let contentLegend = drawing.append("g")
        .attr("transform", "translate(200,-2)"); /*Position of the entire legend*/

    /* Title */
    contentLegend.append("text")
        .attr("x", 50)        /*Relative to the top left corner of the group*/
        .attr("y", 13)
        .attr("text-anchor", "start")/*Left alignment*/
        .attr("font-weight", "bold")
        .style("font-size", "13px")
        .text("Content Type"); 

    /* border of content typle legend */
    contentLegend.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 170)
        .attr("height", 190)
        .style("fill", "none")
        .style("stroke", "gray")
        .style("stroke-width", "1px");

    let contentColors = ["blue", "orange", "pink", "gray"];
    let contentLabels = ["News", "Social Media", "Game", "None"];

    /*A for loop to create different color circles fo the legend*/
    for (let i = 0; i < 4; i++) { 
        contentLegend.append("circle")
            .attr("r", 15)
            .attr("cx", 25)                     
            .attr("cy", 45 + i * 40)            
            .attr("fill", contentColors[i])
            .attr("opacity", "0.7")
            .attr("stroke", "black")
            .attr("stroke-width", 0.5);
        
        contentLegend.append("text")
            .text(contentLabels[i])
            .attr("text-anchor", "start")
            .attr("alignment-baseline", "middle")
            .style("font-size", "10px")
            .attr("x", 50)                      
            .attr("y", 45 + i * 40);     
    }

    /* emotion score legend group */
    let emotionLegend = drawing.append("g")
        .attr("transform", "translate(16,-2)");

    /* borderr*/
    emotionLegend.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 170)
        .attr("height", 190)
        .style("fill", "none")
        .style("stroke", "gray")
        .style("stroke-width", "1px");

    /* Title*/
    emotionLegend.append("text")
        .attr("x", 10) 
        .attr("y", 15)
        .style("font-size", "13px")
        .attr("font-weight", "bold")
        .text("Pre-Toilet Emotion Score");

    /* A for loop of the the emotion legend circles and text */
    for (let i = 1; i <= 3; i++) {
        let emotion;
        if (i === 1) { 
            emotion = 3;
        } else if (i === 2) { 
            emotion = 6;
        } else if (i === 3) {
            emotion = 9;
        }
        emotionLegend.append("circle")
            .attr("r", rScale(emotion)) 
            .attr("cx", 34)
            .attr("cy", i * 55 - 7) 
            .attr("fill", "black")
            .attr("opacity", "0.7");

        emotionLegend.append("text")
            .attr("x", 79)               
            .attr("y", i * 55 - 3) 
            .attr("alignment-baseline", "middle")
            .style("font-size", "10px")
            .text("Level " + emotion);
    }
      
    /* X axis */
    drawing.append("line")
        .attr("x1", xScale(0))
        .attr("y1", yScale(0))
        .attr("x2", xScale(10))
        .attr("y2", yScale(0))
        .attr("stroke", "black")
        .attr("stroke-width", 1);
    
    /* Y axis */
    drawing.append("line")
        .attr("x1", xScale(0))
        .attr("y1", yScale(0))
        .attr("x2", xScale(0))
        .attr("y2", yScale(30))
        .attr("stroke", "black")
        .attr("stroke-width", 1);

    /* label of X axis */
    drawing.append("text")
        .attr("x", xScale(5))
        .attr("y", yScale(0) + 50)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .text("Phone Attractiveness (level)");

    /* label of Y axis */
    drawing.append("text")
        .attr("x", -yScale(15))
        .attr("y", xScale(0) - 50)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "14px")
        .text("Duration (minutes)")
        .attr("transform", "rotate(-90)"); /*Rotating the text “Duration (minutes)”*/

    /* Add manual Y-axis tick labels to mark key values, reference：d3_scaleRadii_starter*/
    drawing.append("text")
        .attr("x", xScale(0))
        .attr("y", yScale(0) + 20)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text("0");
    
    drawing.append("text")
        .attr("x", xScale(2))
        .attr("y", yScale(0) + 20)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text("2");
    drawing.append("text")
        .attr("x", xScale(4))
        .attr("y", yScale(0) + 20)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text("4");
    
    drawing.append("text")
        .attr("x", xScale(6))
        .attr("y", yScale(0) + 20)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text("6");

    drawing.append("text")
        .attr("x", xScale(8))
        .attr("y", yScale(0) + 20)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text("8");
    
    drawing.append("text")
        .attr("x", xScale(10))
        .attr("y", yScale(0) + 20)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text("10");
    /* Add manual Y-axis tick labels to mark key values*/
    drawing.append("text")
        .attr("x", xScale(0) - 10)
        .attr("y", yScale(5))
        .attr("text-anchor", "end")
        .attr("alignment-baseline", "middle")
        .style("font-size", "12px")
        .text("5");
    drawing.append("text")
        .attr("x", xScale(0) - 10)
        .attr("y", yScale(10))
        .attr("text-anchor", "end")
        .attr("alignment-baseline", "middle")
        .style("font-size", "12px")
        .text("10");
    
    drawing.append("text")
        .attr("x", xScale(0) - 10)
        .attr("y", yScale(15))
        .attr("text-anchor", "end")
        .attr("alignment-baseline", "middle")
        .style("font-size", "12px")
        .text("15");
    drawing.append("text")
        .attr("x", xScale(0) - 10)
        .attr("y", yScale(20))
        .attr("text-anchor", "end")
        .attr("alignment-baseline", "middle")
        .style("font-size", "12px")
        .text("20");
    
    drawing.append("text")
        .attr("x", xScale(0) - 10)
        .attr("y", yScale(25))
        .attr("text-anchor", "end")
        .attr("alignment-baseline", "middle")
        .style("font-size", "12px")
        .text("25");
    drawing.append("text")
        .attr("x", xScale(0) - 10)
        .attr("y", yScale(30))
        .attr("text-anchor", "end")
        .attr("alignment-baseline", "middle")
        .style("font-size", "12px")
        .text("30");
}
