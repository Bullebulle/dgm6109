"use strict"

/* Configuration variables: drawing */
let svgWidth = 600;
let svgHeight = 410;/*Add 10 */
let margin = 55; /*Add 10*/

/* Resize  div to match width of visualization. */
d3.select("#container")
    .style("width", String(svgWidth) + "px");

/* Create drawing canvas */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw canvas border */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/*Array of the data, reference, Class_06_Slides, https://northeastern.instructure.com/courses/232461/files/37256740?module_item_id=12713690*/
let dataset = [
   /* 5 Oct*/
    {phoneTime: 12, duration: 13, emotionScore: 3, phoneDistractionLevel: 4},/*The fourth property:Degree of phone distraction during each toilet visit(1-10)*/
    {phoneTime: 0, duration: 2, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 2, duration: 2, emotionScore: 4, phoneDistractionLevel: 5},
    {phoneTime: 15, duration: 15, emotionScore: 8, phoneDistractionLevel: 8},
    {phoneTime: 1, duration: 3, emotionScore: 5, phoneDistractionLevel: 1},
    {phoneTime: 1, duration: 4, emotionScore: 5, phoneDistractionLevel: 1},
    {phoneTime: 18, duration: 19, emotionScore: 9, phoneDistractionLevel: 10},
    /*6 Oct*/
    {phoneTime: 17, duration: 17, emotionScore: 4, phoneDistractionLevel: 10},
    {phoneTime: 9, duration: 9, emotionScore: 5, phoneDistractionLevel: 5},
    {phoneTime: 0, duration: 2, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 10, duration: 13, emotionScore: 6, phoneDistractionLevel: 5},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 22, duration: 22, emotionScore: 9, phoneDistractionLevel: 9},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 10, duration: 12, emotionScore: 4, phoneDistractionLevel: 7},
    /*7 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 2, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 2, phoneDistractionLevel: 0},
    {phoneTime: 18, duration: 18, emotionScore: 7, phoneDistractionLevel: 10},
    {phoneTime: 10, duration: 10, emotionScore: 6, phoneDistractionLevel: 6},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 2, emotionScore: 3, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 1, duration: 3, emotionScore: 5, phoneDistractionLevel: 1},
    {phoneTime: 3, duration: 3, emotionScore: 6, phoneDistractionLevel: 1},
    /*8 Oct*/
    {phoneTime: 1, duration: 1, emotionScore: 2, phoneDistractionLevel: 1},
    {phoneTime: 0, duration: 1, emotionScore: 3, phoneDistractionLevel: 0},
    {phoneTime: 1, duration: 1, emotionScore: 5, phoneDistractionLevel: 1},
    {phoneTime: 0, duration: 3, emotionScore: 7, phoneDistractionLevel: 0},
    {phoneTime: 10, duration: 11, emotionScore: 7, phoneDistractionLevel: 4},
    {phoneTime: 19, duration: 19, emotionScore: 9, phoneDistractionLevel: 10},
    {phoneTime: 7, duration: 7, emotionScore: 7, phoneDistractionLevel: 6},
    /*9 Oct*/
    {phoneTime: 1, duration: 1, emotionScore: 8, phoneDistractionLevel: 1},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 23, duration: 23, emotionScore: 7, phoneDistractionLevel: 10},
    {phoneTime: 3, duration: 3, emotionScore: 5, phoneDistractionLevel: 1},
    {phoneTime: 0, duration: 1, emotionScore: 4, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 4, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0},
    {phoneTime: 15, duration: 15, emotionScore: 6, phoneDistractionLevel: 7},
    {phoneTime: 27, duration: 27, emotionScore: 8, phoneDistractionLevel: 10},
    /*10 Oct*/
    {phoneTime: 12, duration: 12, emotionScore: 6, phoneDistractionLevel: 8},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 8, duration: 8, emotionScore: 5, phoneDistractionLevel: 5},
    {phoneTime: 6, duration: 6, emotionScore: 7, phoneDistractionLevel: 5},
    {phoneTime: 0, duration: 1, emotionScore: 8, phoneDistractionLevel: 0},
    {phoneTime: 23, duration: 23, emotionScore: 8, phoneDistractionLevel: 10},
    /*11 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 16, duration: 16, emotionScore: 6, phoneDistractionLevel: 7},
    {phoneTime: 2, duration: 3, emotionScore: 6, phoneDistractionLevel: 1},
    {phoneTime: 0, duration: 1, emotionScore: 7, phoneDistractionLevel: 0},
    {phoneTime: 23, duration: 23, emotionScore: 7, phoneDistractionLevel: 10},
    {phoneTime: 2, duration: 3, emotionScore: 7, phoneDistractionLevel: 0},
    /*12 Oct*/
    {phoneTime: 10, duration: 12, emotionScore: 5, phoneDistractionLevel: 7},
    {phoneTime: 16, duration: 16, emotionScore: 7, phoneDistractionLevel: 9},
    {phoneTime: 0, duration: 3, emotionScore: 7, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 3, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 2, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 3, phoneDistractionLevel: 0},
    {phoneTime: 19, duration: 19, emotionScore: 1, phoneDistractionLevel: 10},
    {phoneTime: 0, duration: 4, emotionScore: 5, phoneDistractionLevel: 0},
    /*13 Oct*/
    {phoneTime: 5, duration: 5, emotionScore: 6, phoneDistractionLevel: 2},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0},
    {phoneTime: 5, duration: 6, emotionScore: 6, phoneDistractionLevel: 1},  
    {phoneTime: 9, duration: 9, emotionScore: 7, phoneDistractionLevel: 5},
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 3, emotionScore: 5, phoneDistractionLevel: 0},
    /*17 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 2, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 2, emotionScore: 4, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 1, phoneDistractionLevel: 0},
    {phoneTime: 7, duration: 7, emotionScore: 5, phoneDistractionLevel: 5},
    {phoneTime: 26, duration: 26, emotionScore: 7, phoneDistractionLevel: 10},
    {phoneTime: 0, duration: 1, emotionScore: 7, phoneDistractionLevel: 0},
    {phoneTime: 9, duration: 9, emotionScore: 8, phoneDistractionLevel: 5},
    {phoneTime: 18, duration: 18, emotionScore: 8, phoneDistractionLevel: 8},
    /*18 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 8, phoneDistractionLevel: 0},
    {phoneTime: 20, duration: 26, emotionScore: 4, phoneDistractionLevel: 10},
    {phoneTime: 0, duration: 2, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 8, duration: 8, emotionScore: 1, phoneDistractionLevel: 6},
    {phoneTime: 10, duration: 10, emotionScore: 6, phoneDistractionLevel: 6},
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 6, emotionScore: 7, phoneDistractionLevel: 0},
    {phoneTime: 20, duration: 21, emotionScore: 7, phoneDistractionLevel: 10},
    /*19 Oct*/
    {phoneTime: 10, duration: 10, emotionScore: 5, phoneDistractionLevel: 5},
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 3, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 3, duration: 3, emotionScore: 5, phoneDistractionLevel: 2},
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0},
    {phoneTime: 12, duration: 12, emotionScore: 6, phoneDistractionLevel: 6},
    /*20 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 7, phoneDistractionLevel: 0},
    {phoneTime: 13, duration: 13, emotionScore: 4, phoneDistractionLevel: 6},
    {phoneTime: 19, duration: 21, emotionScore: 6, phoneDistractionLevel: 8},
    {phoneTime: 6, duration: 6, emotionScore: 3, phoneDistractionLevel: 4},
    {phoneTime: 10, duration: 12, emotionScore: 6, phoneDistractionLevel: 5},
    {phoneTime: 5, duration: 8, emotionScore: 7, phoneDistractionLevel: 3},
    /*21 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 3, phoneDistractionLevel: 0},
    {phoneTime: 16, duration: 16, emotionScore: 4, phoneDistractionLevel: 8},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 3, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 4, emotionScore: 7, phoneDistractionLevel: 0},
    {phoneTime: 3, duration: 8, emotionScore: 2, phoneDistractionLevel: 1},
    {phoneTime: 0, duration: 2, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 15, duration: 16, emotionScore: 7, phoneDistractionLevel: 0}
];
/* Define filter functions, focus on phone use data,
reference, Class_09_Slides.pdf, https://northeastern.instructure.com/courses/232461/files/37667240?module_item_id=12713726*/
function hasPhoneUse(value) {
    return value.phoneTime > 0;  /*has phone use*/
}

function noPhoneUse(value) {
    return value.phoneTime === 0;  /*No phone use*/
}

/* Sorting function, sort by phone time to avoid overlap,
reference, Class_09_Slides.pdf, https://northeastern.instructure.com/courses/232461/files/37667240?module_item_id=12713726 */
function sortByPhoneTime(a, b) {
    return b.phoneTime - a.phoneTime;
}
/* x axis: distraction level 0-10*/
let xScale = d3.scaleLinear()
    .domain([0, 10])
    .range([margin, svgWidth - margin]);

let yScale = d3.scaleLinear()
    .domain([0, 30])  /*Y-axis: Toilet duration 0-30*/
    .range([svgHeight - margin, margin]);

let rScale = d3.scaleSqrt()
    .domain([0, 30])  /*phone use time range in minutes*/
    .range([5, 20]);


/* Create data points with phone use,
reference, Class_09_Slides.pdf, https://northeastern.instructure.com/courses/232461/files/37667240?module_item_id=12713726 */
let phoneUseCircles = svg.selectAll("circle.phoneUse")
    .data(dataset.filter(hasPhoneUse).sort(sortByPhoneTime))
    .join("circle")
    .classed("phoneUse", true)
    .attr("r", function(value) {
        return rScale(value.phoneTime); /*r = phone use time*/
    })
    .attr("cx", function(value) { 
        return xScale(value.phoneDistractionLevel); /*X-axis = distraction level*/
    })
    .attr("cy", function(value) {
        return yScale(value.duration); /*Y-axis = toilet duration (minutes)*/
    })
    .attr("fill", function(value){ 
        /* color = emotion */
        if (value.emotionScore <= 3) {
            return "blue";
        };
        if (value.emotionScore <= 6) {
            return "orange";
        };
        if (value.emotionScore <= 10) {
            return "pink";
        };
    })
    .attr("stroke", "black")  
    .attr("stroke-width", 0.5) 
    .attr("opacity", "0.7"); 

/* Create data points without phone use as reference for comparison,
reference, Class_09_Slides.pdf, https://northeastern.instructure.com/courses/232461/files/37667240?module_item_id=12713726 */
let noPhoneCircles = svg.selectAll("circle.noPhone")
    .data(dataset.filter(noPhoneUse).sort(sortByPhoneTime))
    .join("circle")
    .classed("noPhone", true)
    .attr("r",3)
    .attr("cx", function(value) {
        return xScale(value.phoneDistractionLevel);
    })
    .attr("cy", function(value) {
        return yScale(value.duration);
    })
    .attr("fill", "gray") /*Gray indicates no phone use*/
    .attr("stroke", "darkgray")
    .attr("stroke-width", 0.5) 
    .attr("opacity", "0.7");

/*color legend*/ 
svg.append("text") /*legend title*/
    .attr("x", svgWidth - 150)
    .attr("y", svgHeight - margin - 85)
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .style("font-size", "13px")
    .text("Emotion Score");

let emotionColors = ["blue", "orange", "pink"];
let emotionLabels = ["Low Emotion (1-3)", "Medium Emotion (4-6)", "High Emotion (7-10)"];
for (let i = 0; i < 3; i++) { /*a "for" loop of legend circle and text*/ 
    svg.append("circle")
        .attr("r", 8)
        .attr("cx", svgWidth -170) 
        .attr("cy", svgHeight - margin - 70 + i * 25)
        .attr("fill", emotionColors[i])
        .attr("opacity", "0.7")
        .attr("stroke", "black")  
        .attr("stroke-width", 0.5);
    
    svg.append("text")
        .text(emotionLabels[i])
        .attr("text-anchor", "start")
        .attr("alignment-baseline", "middle")
        .style("font-size", "10px")
        .attr("x", svgWidth - 150)
        .attr("y", svgHeight - margin - 70 + i * 25);
} 

/*Draw the border of legend*/
svg.append("rect")
    .attr("x", svgWidth - 180)
    .attr("y", svgHeight - margin - 100)
    .attr("width", 170)
    .attr("height", 90)
    .style("fill", "none")  
    .style("stroke", "gray")  
    .style("stroke-width", "1px")  
    .style("stroke-dasharray", "0");


/*This for loop creates three reference circles for the legend.
  Each circle represents a different phone use time: 5, 15, and 30 minutes.Reference：d3_scaleRadii_starter*/ 
for (let i= 1; i<=3; i++) {
    let currentDuration; /*Declare a variable for the current loop’s duration*/
    if (i === 1) { 
        currentDuration = 5;
    } else if (i=== 2) { 
        currentDuration = 15;
    } else if ( i=== 3){
        currentDuration = 30;
    }
    /*draw circles*/
    svg.append("circle")
        .attr("r", rScale(currentDuration)) /*Set the circle radius based on the scaled phone time */
        .attr("cx", margin +41)
        .attr("cy", i*38 - 9)
        .attr("fill", "black")
        .attr("opacity", "0.7");
    /* labels with units*/
    svg.append("text")
        .attr("x", margin + 65)
        .attr("y", i*35 - 1)
        .attr("alignment-baseline", "middle")
        .style("font-size", "10px")
        .text("Phone time: " + currentDuration + "min");
    }

/*Planning ahead for Title of the label*/
let LegendTitle = svg.append("text")
    .attr("x", margin +50)
    .attr("y", 15)
    .style("font-size", "13px")
    .attr("font-weight", "bold")
    .text("Phone Time")

/*Draw the border of legend*/
    svg.append("rect")
    .attr("x", margin + 16)
    .attr("y", 2)
    .attr("width", 160)
    .attr("height", 125)
    .style("fill", "none")  
    .style("stroke", "gray")  
    .style("stroke-width", "1px")  
    .style("stroke-dasharray", "0"); 


/*Draw the X-axis*/
svg.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(0))
    .attr("x2", xScale(10))
    .attr("y2", yScale(0))
    .attr("stroke", "black")
    .attr("stroke-width", 1);

/*Draw the Y-axis*/
svg.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(0))
    .attr("x2", xScale(0))
    .attr("y2", yScale(30))
    .attr("stroke", "black")
    .attr("stroke-width", 1);

/*X axis label*/
let xAxisLabel = svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - 3)
    .attr("text-anchor", "middle")
    .text("Phone Distraction Level (Points)"); 

/*Y axis label*/
let yAxisLabel = svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", margin / 2 -14)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("Toilet Duration (minutes)") 
    .attr("transform", "rotate(-90)");

/* origin point value label,reference：d3_scaleRadii_starter */
let originLabel = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("0");

svg.append("text")
    .attr("x", xScale(2))
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text(String(2));

svg.append("text")
    .attr("x", xScale(4))
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text(String(4));

svg.append("text")
    .attr("x", xScale(6))
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text(String(6));

svg.append("text")
    .attr("x", xScale(8))
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text(String(8));

svg.append("text")
    .attr("x", xScale(10))
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text(String(10));

/* Add manual Y-axis tick labels to mark key values, reference：d3_scaleRadii_starter*/
svg.append("text")
    .attr("x", 30)
    .attr("y", yScale(5))
    .attr("text-anchor", "middle")
    .text(String(5));

svg.append("text")
    .attr("x", 30)
    .attr("y", yScale(10))
    .attr("text-anchor", "middle")
    .text(String(10));

svg.append("text")
    .attr("x", 30)
    .attr("y", yScale(15))
    .attr("text-anchor", "middle")
    .text(String(15));

svg.append("text")
    .attr("x", 30)
    .attr("y", yScale(20))
    .attr("text-anchor", "middle")
    .text(String(20));

svg.append("text")
    .attr("x", 30)
    .attr("y", yScale(25))
    .attr("text-anchor", "middle")
    .text(String(25));

svg.append("text")
    .attr("x", 30)
    .attr("y", yScale(30))
    .attr("text-anchor", "middle")
    .text(String(30));


/*main reference, Class_08_Slides.pdf, https://northeastern.instructure.com/courses/232461/files/37522751?module_item_id=12713716 */
