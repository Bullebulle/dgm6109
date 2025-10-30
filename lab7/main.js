"use strict"
"use strict"


/* Configuration variables: drawing */
let svgWidth = 600;
let svgHeight = 400;
let margin = 25;

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
    {phoneTime: 12, duration: 13},
    {phoneTime: 0, duration: 2},
    {phoneTime: 2, duration: 2},
    {phoneTime: 15, duration: 15},
    {phoneTime: 1, duration: 3},
    {phoneTime: 1, duration: 4},
    {phoneTime: 18, duration: 19},
    /*6 Oct*/
    {phoneTime: 17, duration: 17},
    {phoneTime: 9, duration: 9},
    {phoneTime: 0, duration: 2},
    {phoneTime: 10, duration: 13},
    {phoneTime: 0, duration: 1},
    {phoneTime: 22, duration: 22},
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 1},
    {phoneTime: 10, duration: 12},
    /*7 Oct*/
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 1},
    {phoneTime: 18, duration: 18},
    {phoneTime: 10, duration: 10},
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 2},
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 1},
    {phoneTime: 1, duration: 3},
    {phoneTime: 3, duration: 3},
    /*8 Oct*/
    {phoneTime: 1, duration: 1},
    {phoneTime: 0, duration: 1},
    {phoneTime: 1, duration: 1},
    {phoneTime: 0, duration: 3},
    {phoneTime: 10, duration: 11},
    {phoneTime: 19, duration: 19},
    {phoneTime: 7, duration: 7},
    /*9 Oct*/
    {phoneTime: 1, duration: 1},
    {phoneTime: 0, duration: 1},
    {phoneTime: 23, duration: 23},
    {phoneTime: 3, duration: 3},
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 1},
    {phoneTime: 15, duration: 15},
    {phoneTime: 27, duration: 27},
    /*10 Oct*/
    {phoneTime: 12, duration: 12},
    {phoneTime: 0, duration: 1},
    {phoneTime: 8, duration: 8},
    {phoneTime: 6, duration: 6},
    {phoneTime: 0, duration: 1},
    {phoneTime: 23, duration: 23},
    /*11 Oct*/
    {phoneTime: 0, duration: 1},
    {phoneTime: 16, duration: 16},
    {phoneTime: 2, duration: 3},
    {phoneTime: 0, duration: 1},
    {phoneTime: 23, duration: 23},
    {phoneTime: 2, duration: 3},
    /*12 Oct*/
    {phoneTime: 10, duration: 12},
    {phoneTime: 16, duration: 16},
    {phoneTime: 0, duration: 3},
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 1},
    {phoneTime: 19, duration: 19},
    {phoneTime: 0, duration: 4},
    /*13 Oct*/
     {phoneTime: 5, duration: 5},
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 1},
    {phoneTime: 5, duration: 6},
    {phoneTime: 9, duration: 9},
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 3},
    /*17 Oct*/
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 2},
    {phoneTime: 0, duration: 1},
    {phoneTime: 7, duration: 7},
    {phoneTime: 26, duration: 26},
    {phoneTime: 0, duration: 1},
    {phoneTime: 9, duration: 9},
    {phoneTime: 18, duration: 18},
    /*18 Oct*/
    {phoneTime: 0, duration: 1},
    {phoneTime: 20, duration: 26},
    {phoneTime: 0, duration: 2},
    {phoneTime: 8, duration: 8},
    {phoneTime: 10, duration: 10},
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 6},
    /*19 Oct*/
    {phoneTime: 10, duration: 10},
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 3},
    {phoneTime: 3, duration: 3},
    {phoneTime: 0, duration: 1},
    {phoneTime: 12, duration: 12},
    /*20 Oct*/
    {phoneTime: 0, duration: 1},
    {phoneTime: 13, duration: 13},
    {phoneTime: 19, duration: 21},
    {phoneTime: 6, duration: 6},
    {phoneTime: 10, duration: 12},
    {phoneTime: 5, duration: 8},
    /*21 Oct*/
    {phoneTime: 0, duration: 1},
    {phoneTime: 16, duration: 16},
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 1},
    {phoneTime: 0, duration: 4},
    {phoneTime: 3, duration: 8},
    {phoneTime: 0, duration: 2},
    {phoneTime: 15, duration: 16}
];

let xScale = d3.scaleLinear()
    .domain([0, 30])/*phoneTime from 0 min to 30min(max)*/
    .range([margin, svgWidth - margin]);

let yScale = d3.scaleLinear()
    .domain([0, 30])/*toilet visit duration form 0 min to 30min (max)*/
    .range([svgHeight - margin, margin]);

let circles = svg.selectAll("circle")
    .data(dataset)
    .join("circle");

circles.attr("r", 10)
    .attr("cx", function (value) { /*connect circles and values*/
        return xScale(value.phoneTime);/* Use scale to convert phoneTime value to X axis position */
    })
    .attr("cy", function (value) {
        return yScale(value.duration);/* Use scale to convert duration value to Y axis position */
    })
    .attr("fill","black")
    .attr("opacity", "0.5"); /*Graphics enhancements (optional): set the opacity attribute on the plotted dots to a value less than 1*/

/**** label the axes ****/
let xAxisLabel = svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("Phone Use Time (minutes)"); /*X axis label*/

let yAxisLabel = svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", margin / 2)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("Toilet Time Duration(minutes)") /*Y axis label*/
    .attr("transform", "rotate(-90)");

/**** label key graph coordinates ****/
let originLabel = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("0,0");

let xMaxLable = svg.append("text")
    .attr("x",xScale(30)) /* the max value of X axis*/
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("30")

let yMaxLabel = svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", yScale(30))/*the max value of Y axis*/
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")

let originpointLabel = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("0"); /* origin point  value label*/

/*main reference, W7_Class_Slides.pdf, https://northeastern.instructure.com/courses/232461/files/37421829?module_item_id=12713702*/
