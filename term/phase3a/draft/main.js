"use strict"

/* Configuration variables: drawing */
let svgWidth = 600;
let svgHeight = 410;/*Add 10 */
let margin = 35; /*Add 10*/

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

/* Draw margin border. */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-dasharray", "5")
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2);

let dataset = [ /*X axis:phoneTime ("A: As my phone use during toilet time increases") ，Y axis: duration (".my time spent on the toilet increases"*/
   /* 5 Oct*/
    {phoneTime: 12, duration: 13, emotionScore: 3},/* emotionScore (related to Y in my hypothesis)*/
    {phoneTime: 0, duration: 2, emotionScore: 5},
    {phoneTime: 2, duration: 2, emotionScore: 4},
    {phoneTime: 15, duration: 15, emotionScore: 8},
    {phoneTime: 1, duration: 3, emotionScore: 5},
    {phoneTime: 1, duration: 4, emotionScore: 5},
    {phoneTime: 18, duration: 19, emotionScore: 9},
    /*6 Oct*/
    {phoneTime: 17, duration: 17, emotionScore: 4},
    {phoneTime: 9, duration: 9, emotionScore: 5},
    {phoneTime: 0, duration: 2, emotionScore: 5},
    {phoneTime: 10, duration: 13, emotionScore: 6},
    {phoneTime: 0, duration: 1, emotionScore: 5},
    {phoneTime: 22, duration: 22, emotionScore: 9},
    {phoneTime: 0, duration: 1, emotionScore: 5},
    {phoneTime: 0, duration: 1, emotionScore: 5},
    {phoneTime: 10, duration: 12, emotionScore: 4},
    /*7 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 2},
    {phoneTime: 0, duration: 1, emotionScore: 2},
    {phoneTime: 18, duration: 18, emotionScore: 7},
    {phoneTime: 10, duration: 10, emotionScore: 6},
    {phoneTime: 0, duration: 1, emotionScore: 5},
    {phoneTime: 0, duration: 2, emotionScore: 3},
    {phoneTime: 0, duration: 1, emotionScore: 5},
    {phoneTime: 0, duration: 1, emotionScore: 5},
    {phoneTime: 1, duration: 3, emotionScore: 5},
    {phoneTime: 3, duration: 3, emotionScore: 6},
    /*8 Oct*/
    {phoneTime: 1, duration: 1, emotionScore: 2},
    {phoneTime: 0, duration: 1, emotionScore: 3},
    {phoneTime: 1, duration: 1, emotionScore: 5},
    {phoneTime: 0, duration: 3, emotionScore: 7},
    {phoneTime: 10, duration: 11, emotionScore: 7},
    {phoneTime: 19, duration: 19, emotionScore: 9},
    {phoneTime: 7, duration: 7, emotionScore: 7},
    /*9 Oct*/
    {phoneTime: 1, duration: 1, emotionScore: 8},
    {phoneTime: 0, duration: 1, emotionScore: 5},
    {phoneTime: 23, duration: 23, emotionScore: 7},
    {phoneTime: 3, duration: 3, emotionScore: 5},
    {phoneTime: 0, duration: 1, emotionScore: 4},
    {phoneTime: 0, duration: 1, emotionScore: 4},
    {phoneTime: 0, duration: 1, emotionScore: 6},
    {phoneTime: 15, duration: 15, emotionScore: 6},
    {phoneTime: 27, duration: 27, emotionScore: 8},
    /*10 Oct*/
    {phoneTime: 12, duration: 12, emotionScore: 6},
    {phoneTime: 0, duration: 1, emotionScore: 5},
    {phoneTime: 8, duration: 8, emotionScore: 5},
    {phoneTime: 6, duration: 6, emotionScore: 7},
    {phoneTime: 0, duration: 1, emotionScore: 8},
    {phoneTime: 23, duration: 23, emotionScore: 8},
    /*11 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 5},
    {phoneTime: 16, duration: 16, emotionScore: 6},
    {phoneTime: 2, duration: 3, emotionScore: 6},
    {phoneTime: 0, duration: 1, emotionScore: 7},
    {phoneTime: 23, duration: 23, emotionScore: 7},
    {phoneTime: 2, duration: 3, emotionScore: 7},
    /*12 Oct*/
    {phoneTime: 10, duration: 12, emotionScore: 5},
    {phoneTime: 16, duration: 16, emotionScore: 7},
    {phoneTime: 0, duration: 3, emotionScore: 7},
    {phoneTime: 0, duration: 1, emotionScore: 6},
    {phoneTime: 0, duration: 1, emotionScore: 6},
    {phoneTime: 0, duration: 1, emotionScore: 5},
    {phoneTime: 19, duration: 19, emotionScore: 7},
    {phoneTime: 0, duration: 4, emotionScore: 5},
    /*13 Oct*/
    {phoneTime: 5, duration: 5, emotionScore: 6},
    {phoneTime: 0, duration: 1, emotionScore: 5},
    {phoneTime: 0, duration: 1, emotionScore: 6},
    {phoneTime: 5, duration: 6, emotionScore: 6},  
    {phoneTime: 9, duration: 9, emotionScore: 7},
    {phoneTime: 0, duration: 1, emotionScore: 6},
    {phoneTime: 0, duration: 3, emotionScore: 5},
    /*17 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 2},
    {phoneTime: 0, duration: 2, emotionScore: 4},
    {phoneTime: 0, duration: 1, emotionScore: 4},
    {phoneTime: 7, duration: 7, emotionScore: 5},
    {phoneTime: 26, duration: 26, emotionScore: 7},
    {phoneTime: 0, duration: 1, emotionScore: 7},
    {phoneTime: 9, duration: 9, emotionScore: 8},
    {phoneTime: 18, duration: 18, emotionScore: 8},
    /*18 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 8},
    {phoneTime: 20, duration: 26, emotionScore: 4},
    {phoneTime: 0, duration: 2, emotionScore: 5},
    {phoneTime: 8, duration: 8, emotionScore: 5},
    {phoneTime: 10, duration: 10, emotionScore: 6},
    {phoneTime: 0, duration: 1, emotionScore: 6},
    {phoneTime: 0, duration: 6, emotionScore: 7},
    {phoneTime: 20, duration: 21, emotionScore: 7},
    /*19 Oct*/
    {phoneTime: 10, duration: 10, emotionScore: 5},
    {phoneTime: 0, duration: 1, emotionScore: 6},
    {phoneTime: 0, duration: 3, emotionScore: 5},
    {phoneTime: 3, duration: 3, emotionScore: 5},
    {phoneTime: 0, duration: 1, emotionScore: 6},
    {phoneTime: 12, duration: 12, emotionScore: 6},
    /*20 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 7},
    {phoneTime: 13, duration: 13, emotionScore: 4},
    {phoneTime: 19, duration: 21, emotionScore: 6},
    {phoneTime: 6, duration: 6, emotionScore: 6},
    {phoneTime: 10, duration: 12, emotionScore: 6},
    {phoneTime: 5, duration: 8, emotionScore: 7},
    /*21 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 3},
    {phoneTime: 16, duration: 16, emotionScore: 4},
    {phoneTime: 0, duration: 1, emotionScore: 5},
    {phoneTime: 0, duration: 1, emotionScore: 7},
    {phoneTime: 0, duration: 4, emotionScore: 7},
    {phoneTime: 3, duration: 8, emotionScore: 6},
    {phoneTime: 0, duration: 2, emotionScore: 5},
    {phoneTime: 15, duration: 16, emotionScore: 7}
];
/*sort function
reference1：https://javascript.info/array-methods#transform-an-array
reference2:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort*/
dataset.sort(function(a, b) {
    return b.emotionScore - a.emotionScore; /*Sort the emotion score values ​​in descending order, so that the cold could draw big circles first, then small circles */
});

let xScale = d3.scaleLinear()
    .domain([0, 30])
    .range([margin, svgWidth - margin]);

let yScale = d3.scaleLinear()
    .domain([0, 30])
    .range([svgHeight - margin, margin]);

let circles = svg.selectAll("circle")
    .data(dataset)
    .join("circle");

/*radius scaled by emotion score*/
let maxEmotion = 10

let rScale = d3.scaleLinear() 
    .domain([0, maxEmotion])
    .range([5, 20]);

circles.attr("r", function (value) {
    return rScale(value.emotionScore);/*Set circle radius based on emotion score*/
})
    .attr("cx", function (value) { 
        return xScale(value.phoneTime);/* Use scale to convert phoneTime value to X axis position */
    })
    .attr("cy", function (value) {
        return yScale(value.duration);/* Use scale to convert duration value to Y axis position */
    })
    .attr("fill","black")
    .attr("opacity", "0.5");

    /*This for loop creates three reference circles for the legend. 
    Each circle represents a different emotion score: smallest(1), approximately average size(5), and largest(10)*/ 
for (let i= 1; i<=3; i++) {
    let currentEmotion; /*Declare a variable for the current loop’s emotion score*/
    if (i === 1) { 
        currentEmotion = 1;
    } else if (i=== 2) { 
        currentEmotion = 5;
    } else if ( i=== 3){
        currentEmotion = 10;
    }
    /*draw circles*/
    svg.append("circle")
        .attr("r", rScale(currentEmotion)) /*Set the circle radius based on the scaled emotion score*/ 
        .attr("cx", margin +25)
        .attr("cy", margin + i*35)
        .attr("fill", "black")
        .attr("opacity", "0.5");
    /* labels with units*/
    svg.append("text")
        .attr("x", margin + 45)
        .attr("y", margin + i*35)
        .attr("alignment-baseline", "middle")
        .text("Emotion Score:" + currentEmotion + "Points");
    /*Title of the label*/
    svg.append("text")
        .attr("x", margin+13)
        .attr("y", margin+13)
        .attr("font-weight", "bold")
        .text("Emotion Score Legend");
    }


/*X axis label*/
let xAxisLabel = svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - 3)
    .attr("text-anchor", "middle")
    .text("Phone Use Time (minutes)"); 

/*Y axis label*/
let yAxisLabel = svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", margin / 2)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("Toilet Time Duration (minutes)") 
    .attr("transform", "rotate(-90)");

/* origin point value label */
let originLabel = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("0");

/* X axis MAX value label */
let xMaxLabel = svg.append("text")
    .attr("x",xScale(30)) /* the max value of X axis*/
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("30") 

/* Y axis MAX value label */
let yMaxLabel = svg.append("text")
    .attr("x", margin / 2) /*Left margin position to keep label visible within canvas*/
    .attr("y", yScale(30))/*the max value of Y axis*/
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("30") 

/* Add manual X-axis tick labels to mark key values，reference：d3_scaleRadii_starter */
svg.append("text")
    .attr("x", xScale(5))
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text(String(5));

svg.append("text")
    .attr("x", xScale(10))
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text(String(10));

svg.append("text")
    .attr("x", xScale(15))
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text(String(15));

svg.append("text")
    .attr("x", xScale(20))
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text(String(20));

svg.append("text")
    .attr("x", xScale(25))
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text(String(15));


/*main reference, Lab Recording - Week 07, https://northeastern.instructure.com/courses/232478/pages/lab-recording-week-07?module_item_id=12713883*/