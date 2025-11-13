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
    {phoneTime: 12, duration: 13, emotionScore: 3, phoneDistractionLevel: 4, contentType: "game"},/*The fourth property:Degree of phone distraction during each toilet visit(1-10)*/
    {phoneTime: 0, duration: 2, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 2, duration: 2, emotionScore: 4, phoneDistractionLevel: 5, contentType: "news"},
    {phoneTime: 15, duration: 15, emotionScore: 8, phoneDistractionLevel: 8, contentType: "game"},
    {phoneTime: 1, duration: 3, emotionScore: 5, phoneDistractionLevel: 1, contentType: "news"},
    {phoneTime: 1, duration: 4, emotionScore: 5, phoneDistractionLevel: 1, contentType: "news"},
    {phoneTime: 18, duration: 19, emotionScore: 9, phoneDistractionLevel: 10, contentType: "game"},
    /*6 Oct*/
    {phoneTime: 17, duration: 17, emotionScore: 4, phoneDistractionLevel: 10, contentType: "socialMedia"},
    {phoneTime: 9, duration: 9, emotionScore: 5, phoneDistractionLevel: 5, contentType: "socialMedia"},
    {phoneTime: 0, duration: 2, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 10, duration: 13, emotionScore: 6, phoneDistractionLevel: 5, contentType: "news"},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 22, duration: 22, emotionScore: 9, phoneDistractionLevel: 9, contentType: "game"},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 10, duration: 12, emotionScore: 4, phoneDistractionLevel: 7, contentType: "socialMedia"},
    /*7 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 2, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 1, emotionScore: 2, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 18, duration: 18, emotionScore: 7, phoneDistractionLevel: 10, contentType: "game"},
    {phoneTime: 10, duration: 10, emotionScore: 6, phoneDistractionLevel: 6, contentType: "socialMedia"},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 2, emotionScore: 3, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 1, duration: 3, emotionScore: 5, phoneDistractionLevel: 1, contentType: "game"},
    {phoneTime: 3, duration: 3, emotionScore: 6, phoneDistractionLevel: 1, contentType: "game"},
    /*8 Oct*/
    {phoneTime: 1, duration: 1, emotionScore: 2, phoneDistractionLevel: 1, contentType: "news"},
    {phoneTime: 0, duration: 1, emotionScore: 3, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 1, duration: 1, emotionScore: 5, phoneDistractionLevel: 1, contentType: "news"},
    {phoneTime: 0, duration: 3, emotionScore: 7, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 10, duration: 11, emotionScore: 7, phoneDistractionLevel: 4, contentType: "game"},
    {phoneTime: 19, duration: 19, emotionScore: 9, phoneDistractionLevel: 10, contentType: "socialMedia"},
    {phoneTime: 7, duration: 7, emotionScore: 7, phoneDistractionLevel: 6, contentType: "game"},
    /*9 Oct*/
    {phoneTime: 1, duration: 1, emotionScore: 8, phoneDistractionLevel: 1, contentType: "news"},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 23, duration: 23, emotionScore: 7, phoneDistractionLevel: 10, contentType: "socialMedia"},
    {phoneTime: 3, duration: 3, emotionScore: 5, phoneDistractionLevel: 1, contentType: "news"},
    {phoneTime: 0, duration: 1, emotionScore: 4, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 1, emotionScore: 4, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 15, duration: 15, emotionScore: 6, phoneDistractionLevel: 7, contentType: "socialMedia"},
    {phoneTime: 27, duration: 27, emotionScore: 8, phoneDistractionLevel: 10, contentType: "game"},
    /*10 Oct*/
    {phoneTime: 12, duration: 12, emotionScore: 6, phoneDistractionLevel: 8, contentType: "news"},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 8, duration: 8, emotionScore: 5, phoneDistractionLevel: 5, contentType: "game"},
    {phoneTime: 6, duration: 6, emotionScore: 7, phoneDistractionLevel: 5, contentType: "socialMedia"},
    {phoneTime: 0, duration: 1, emotionScore: 8, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 23, duration: 23, emotionScore: 8, phoneDistractionLevel: 10, contentType: "game"},
    /*11 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 16, duration: 16, emotionScore: 6, phoneDistractionLevel: 7, contentType: "socialMedia"},
    {phoneTime: 2, duration: 3, emotionScore: 6, phoneDistractionLevel: 1, contentType: "news"},
    {phoneTime: 0, duration: 1, emotionScore: 7, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 23, duration: 23, emotionScore: 7, phoneDistractionLevel: 10, contentType: "game"},
    {phoneTime: 2, duration: 3, emotionScore: 7, phoneDistractionLevel: 0, contentType: "news"},
    /*12 Oct*/
    {phoneTime: 10, duration: 12, emotionScore: 5, phoneDistractionLevel: 7, contentType: "news"},
    {phoneTime: 16, duration: 16, emotionScore: 7, phoneDistractionLevel: 9, contentType: "socialMedia"},
    {phoneTime: 0, duration: 3, emotionScore: 7, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 1, emotionScore: 3, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 1, emotionScore: 2, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 1, emotionScore: 3, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 19, duration: 19, emotionScore: 1, phoneDistractionLevel: 10, contentType: "game"},
    {phoneTime: 0, duration: 4, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    /*13 Oct*/
    {phoneTime: 5, duration: 5, emotionScore: 6, phoneDistractionLevel: 2, contentType: "news"},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 5, duration: 6, emotionScore: 6, phoneDistractionLevel: 1, contentType: "socialMedia"},  
    {phoneTime: 9, duration: 9, emotionScore: 7, phoneDistractionLevel: 5, contentType: "news"},
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 3, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    /*17 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 2, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 2, emotionScore: 4, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 1, emotionScore: 1, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 7, duration: 7, emotionScore: 5, phoneDistractionLevel: 5, contentType: "socialMedia"},
    {phoneTime: 26, duration: 26, emotionScore: 7, phoneDistractionLevel: 10, contentType: "game"},
    {phoneTime: 0, duration: 1, emotionScore: 7, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 9, duration: 9, emotionScore: 8, phoneDistractionLevel: 5, contentType: "socialMedia"},
    {phoneTime: 18, duration: 18, emotionScore: 8, phoneDistractionLevel: 8, contentType: "game"},
    /*18 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 8, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 20, duration: 26, emotionScore: 4, phoneDistractionLevel: 10, contentType: "socialMedia"},
    {phoneTime: 0, duration: 2, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 8, duration: 8, emotionScore: 1, phoneDistractionLevel: 6, contentType: "game"},
    {phoneTime: 10, duration: 10, emotionScore: 6, phoneDistractionLevel: 6, contentType: "socialMedia"},
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 6, emotionScore: 7, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 20, duration: 21, emotionScore: 7, phoneDistractionLevel: 10, contentType: "game"},
    /*19 Oct*/
    {phoneTime: 10, duration: 10, emotionScore: 5, phoneDistractionLevel: 5, contentType: "socialMedia"},
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 3, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 3, duration: 3, emotionScore: 5, phoneDistractionLevel: 2, contentType: "news"},
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 12, duration: 12, emotionScore: 6, phoneDistractionLevel: 6, contentType: "socialMedia"},
    /*20 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 7, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 13, duration: 13, emotionScore: 4, phoneDistractionLevel: 6, contentType: "socialMedia"},
    {phoneTime: 19, duration: 21, emotionScore: 6, phoneDistractionLevel: 8, contentType: "game"},
    {phoneTime: 6, duration: 6, emotionScore: 3, phoneDistractionLevel: 4, contentType: "news"},
    {phoneTime: 10, duration: 12, emotionScore: 6, phoneDistractionLevel: 5, contentType: "socialMedia"},
    {phoneTime: 5, duration: 8, emotionScore: 7, phoneDistractionLevel: 3, contentType: "socialMedia"},
    /*21 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 3, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 16, duration: 16, emotionScore: 4, phoneDistractionLevel: 8, contentType: "socialMedia"},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 1, emotionScore: 3, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 0, duration: 4, emotionScore: 7, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 3, duration: 8, emotionScore: 2, phoneDistractionLevel: 1, contentType: "game"},
    {phoneTime: 0, duration: 2, emotionScore: 5, phoneDistractionLevel: 0, contentType: "none"},
    {phoneTime: 15, duration: 16, emotionScore: 7, phoneDistractionLevel: 0, contentType: "game"}
];
/* Filter function: keep visits longer than 2 minutes, 
reference, Class_09_Slides.pdf, https://northeastern.instructure.com/courses/232461/files/37667240?module_item_id=12713726*/
function hasValidDuration(value) {
    return value.duration > 2; 
}


/* x axis: emotion level 1-10*/
let xScale = d3.scaleLinear()
    .domain([1, 10])
    .range([margin, svgWidth - margin]);
/*Y-axis: distraction level 0-10*/
let yScale = d3.scaleLinear()
    .domain([0, 10])  
    .range([svgHeight - margin, margin]);



/* Create all data points after filtering by duration,
reference, Class_09_Slides.pdf, https://northeastern.instructure.com/courses/232461/files/37667240?module_item_id=12713726 */
let allCircles = svg.selectAll("circle.dataPoints")
    .data(dataset.filter(hasValidDuration))
    .join("circle")
    .classed("dataPoints", true)
    .attr("r", 10)
    .attr("cx", function(value) { 
        return xScale(value.emotionScore);
    })
    .attr("cy", function(value) {
        return yScale(value.phoneDistractionLevel);
    })
    .attr("fill", function(value){ 
        /* color = phone content type*/
        if (value.contentType === "game") {
            return "pink";
        } else if (value.contentType === "socialMedia") {
            return "orange";
        } else if (value.contentType === "news") {
            return "blue";
        } else {
            return "gray";
        }
    })
    .attr("stroke", "black")  
    .attr("stroke-width", 0.5) 
    .attr("opacity", "0.7");

/*color legend*/ 
svg.append("text") /*legend title*/
    .attr("x", svgWidth - 115)
    .attr("y", svgHeight - margin - 102)
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .style("font-size", "13px")
    .text("Content Type");

/*a "for" loop of legend circle and text, Reference：d3_scaleRadii_starter*/
let contentTypeColor = ["blue", "orange", "pink", "gray"];
let contentLabels = ["News", "Social Media", "Game", "None"];
for (let i = 0; i < 4; i++) { 
    svg.append("circle")
        .attr("r", 8)
        .attr("cx", svgWidth -130) 
        .attr("cy", svgHeight - margin - 89 + i * 25)
        .attr("fill", contentTypeColor[i])
        .attr("stroke", "black")  
        .attr("stroke-width", 0.5);
    
    svg.append("text")
        .text(contentLabels[i])
        .attr("text-anchor", "start")
        .attr("alignment-baseline", "middle")
        .style("font-size", "10px")
        .attr("x", svgWidth - 110)
        .attr("y", svgHeight - margin - 89 + i * 25);
} 

/*Draw the border of legend*/
svg.append("rect")
    .attr("x", svgWidth - 140)
    .attr("y", svgHeight - margin - 120)
    .attr("width", 130)
    .attr("height", 117)
    .style("fill", "none")  
    .style("stroke", "gray")  
    .style("stroke-width", "1px")  
    .style("stroke-dasharray", "0");


/*Draw the X-axis*/
svg.append("line")
    .attr("x1", xScale(1))
    .attr("y1", yScale(0))
    .attr("x2", xScale(10))
    .attr("y2", yScale(0))
    .attr("stroke", "black")
    .attr("stroke-width", 1);

/*Draw the Y-axis*/
svg.append("line")
    .attr("x1", xScale(1))
    .attr("y1", yScale(0))
    .attr("x2", xScale(1))
    .attr("y2", yScale(10))
    .attr("stroke", "black")
    .attr("stroke-width", 1);

/*X axis label*/
let xAxisLabel = svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - 3)
    .attr("text-anchor", "middle")
    .text("Emotion Score (1-10)"); 

/*Y axis label*/
let yAxisLabel = svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", margin / 2 -14)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("Distraction Level (0-10)") 
    .attr("transform", "rotate(-90)");

/* origin point value label,reference：d3_scaleRadii_starter */
let originLabel = svg.append("text")
    .attr("x", xScale(1) - 25)
    .attr("y", yScale(0) + 26)
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
    .attr("y", yScale(2))
    .attr("text-anchor", "middle")
    .text(String(2));

svg.append("text")
    .attr("x", 30)
    .attr("y", yScale(4))
    .attr("text-anchor", "middle")
    .text(String(4));

svg.append("text")
    .attr("x", 30)
    .attr("y", yScale(6))
    .attr("text-anchor", "middle")
    .text(String(6));

svg.append("text")
    .attr("x", 30)
    .attr("y", yScale(8))
    .attr("text-anchor", "middle")
    .text(String(8));

svg.append("text")
    .attr("x", 30)
    .attr("y", yScale(10))
    .attr("text-anchor", "middle")
    .text(String(10));


/*main reference, Class_09_Slides.pdf, https://northeastern.instructure.com/courses/232461/files/37667240?module_item_id=12713726 */
