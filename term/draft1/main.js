"use strict"

let svgWidth = 1200
let svgHeight = 950
let margin = {
    top: 100,/*for title*/
    right: 30,
    bottom: 60,
    left: 80
}

/*Create drawing canvas*/
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
/*Draw canvas border*/
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

/*Create the "viz" group*/
let viz = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`)


/*Global Variables*/
let data, /*The dataset loaded from the JSON file and used throughout the visualization.*/
xAxis, /*SVG group element representing the X-axis, useful for referencing or updating. */
yAxis, /*SVG group element representing the Y-axis, useful for referencing or updating.*/ 
xScale, /*D3 scale that maps the phone attractiveness level (0–10) to the X-position on the chart.*/
yScale, /*English: D3 scale that maps toilet duration (0–30 minutes) to the Y-position on the chart.*/
rScale; /* D3 scale that maps phoneTime to the circle radius in the scatterplot.*/


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

function buildScales(data) {
     /* x axis: phoneAttractivenessLevel 0-10 */
    xScale = d3.scaleLinear()
        .domain([0, 10])
        .range([0, svgWidth - (margin.left + margin.right)]);
    
    /* Y-axis: Toilet duration 0-30 */
    yScale = d3.scaleLinear()
        .domain([0, 30])
        .range([svgHeight - (margin.top + margin.bottom), 0]);
    
    /* phone use time range in minutes 0-30 */
    rScale = d3.scaleSqrt()
        .domain([0, 30]) /* Input data range (mobile phone use time)*/
        .range([5, 20]);   /*Range of the mapped circle radiu*/
}

function organizeData(data) { /*sorts the data by phoneTime from largest to smallest to avoid overlap*/
    data.sort(function(a, b) {
        return b.phoneTime - a.phoneTime;
    });
    return data;
}

/*This function is responsible for drawing all the graphics onto the SVG, such as scatter plots, axes, and legends.

* It uses the previously created scale (xScale, yScale, rScale) to determine the position and size of the circles.*/
function drawVisualization(data, drawing) {
 /* Draw circles - Turn each data point into a circle. */
    drawing.selectAll("circle.dataPoint")
        .data(data)  /*Bind data to circle*/
        .join("circle")/*If a circle does not exist, create one.*/
        .classed("dataPoint", true) /*Add a class to each circle for easy labeling.*/
        .attr("r", function(value) {
            return rScale(value.phoneTime);  /* r = phone use time */
        })
        .attr("cx", function(value) { 
            return xScale(value.phoneAttractivenessLevel);  /* X-axis = phoneAttractivenessLevel */
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
            return "gray";  /* if there are any other type, return gray */
        })
        .attr("stroke", "black")  
        .attr("stroke-width", 0.5) 
        .attr("opacity", "0.7"); 

        /* color legend */
    drawing.append("text")
        .attr("x", 250) 
        .attr("y", 11)  
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .style("font-size", "13px")
        .text("Content Type"); 

    
    let contentColors = ["blue", "orange", "pink", "gray"];
    let contentLabels = ["News", "Social Media", "Game", "None"];

    let legendBoxX = 200;  // left top of the border
    let legendBoxY = -2;   // left top of the border
/*a "for" loop of legend circle and text*/ 
    for (let i = 0; i < 4; i++) { 
        drawing.append("circle")
            .attr("r", 8)
            .attr("cx", legendBoxX +15)
            .attr("cy", legendBoxY + 40+i * 25)  /*Starting from legendBoxY + 40, each circle is spaced 25 pixels downwards.*/
            .attr("fill", contentColors[i])
            .attr("opacity", "0.7")
            .attr("stroke", "black")
            .attr("stroke-width", 0.5);
        
        drawing.append("text")
            .text(contentLabels[i])
            .attr("text-anchor", "start")
            .attr("alignment-baseline", "middle")
            .style("font-size", "10px")
            .attr("x", legendBoxX + 30)
            .attr("y", legendBoxY + 40 + i * 25);

        /* border of legend*/
        drawing.append("rect")
            .attr("x", legendBoxX)
            .attr("y", legendBoxY) 
            .attr("width", 170)
            .attr("height", 135) 
            .style("fill", "none")
            .style("stroke", "gray")
            .style("stroke-width", "1px");
        }

        /* Title */
    drawing.append("text")
        .attr("x", 50)
        .attr("y", 10)
        .style("font-size", "13px")
        .attr("font-weight", "bold")
        .text("Phone Use Duration");

    /* The phone time legend and text */
    for (let i = 1; i <= 3; i++) {
    let currentDuration; /* Declare a variable for the current loop's duration */
        if (i === 1) { 
            currentDuration = 5;
        } else if (i === 2) { 
            currentDuration = 15;
        } else if (i === 3) {
            currentDuration = 30;
        }
    /* draw circles */
    drawing.append("circle")
        .attr("r", rScale(currentDuration)) 
        .attr("cx", 40)
        .attr("cy", i * 38 - 9)
        .attr("fill", "black")
        .attr("opacity", "0.7");

    /* labels with units */
    drawing.append("text")
        .attr("x", 65)
        .attr("y", i * 38 - 1)
        .attr("alignment-baseline", "middle")
        .style("font-size", "10px")
        .text("Phone time: " + currentDuration + "min");
        }

    /* legend border */
    drawing.append("rect")
        .attr("x", 16)
        .attr("y", -2)
        .attr("width", 160)
        .attr("height", 135)
        .style("fill", "none")
        .style("stroke", "gray")
        .style("stroke-width", "1px");
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
        .text("Phone Attractiveness Level(1-10Point)");

    /* label of Y axis */
    drawing.append("text")
        .attr("x", -yScale(15))
        .attr("y", xScale(0) - 50)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .style("font-size", "14px")
        .text("Duration (minutes)")
        .attr("transform", "rotate(-90)");

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
