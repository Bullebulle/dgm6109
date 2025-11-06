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

/* Draw margin border. */
//svg.append("rect")
   // .attr("fill", "none")
    //.attr("stroke", "black")
    //.attr("stroke-dasharray", "5")
    //.attr("x", margin)
    //.attr("y", margin)
    //.attr("width", svgWidth - margin * 2)
   // .attr("height", svgHeight - margin * 2);

let dataset = [ /*X axis:phoneTime ("A: As my phone use during toilet time increases") ，Y axis: duration (".my time spent on the toilet increases"*/
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
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 6, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 19, duration: 19, emotionScore: 7, phoneDistractionLevel: 10},
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
    {phoneTime: 0, duration: 1, emotionScore: 4, phoneDistractionLevel: 0},
    {phoneTime: 7, duration: 7, emotionScore: 5, phoneDistractionLevel: 5},
    {phoneTime: 26, duration: 26, emotionScore: 7, phoneDistractionLevel: 10},
    {phoneTime: 0, duration: 1, emotionScore: 7, phoneDistractionLevel: 0},
    {phoneTime: 9, duration: 9, emotionScore: 8, phoneDistractionLevel: 5},
    {phoneTime: 18, duration: 18, emotionScore: 8, phoneDistractionLevel: 8},
    /*18 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 8, phoneDistractionLevel: 0},
    {phoneTime: 20, duration: 26, emotionScore: 4, phoneDistractionLevel: 10},
    {phoneTime: 0, duration: 2, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 8, duration: 8, emotionScore: 5, phoneDistractionLevel: 6},
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
    {phoneTime: 6, duration: 6, emotionScore: 6, phoneDistractionLevel: 4},
    {phoneTime: 10, duration: 12, emotionScore: 6, phoneDistractionLevel: 5},
    {phoneTime: 5, duration: 8, emotionScore: 7, phoneDistractionLevel: 3},
    /*21 Oct*/
    {phoneTime: 0, duration: 1, emotionScore: 3, phoneDistractionLevel: 0},
    {phoneTime: 16, duration: 16, emotionScore: 4, phoneDistractionLevel: 8},
    {phoneTime: 0, duration: 1, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 1, emotionScore: 7, phoneDistractionLevel: 0},
    {phoneTime: 0, duration: 4, emotionScore: 7, phoneDistractionLevel: 0},
    {phoneTime: 3, duration: 8, emotionScore: 6, phoneDistractionLevel: 1},
    {phoneTime: 0, duration: 2, emotionScore: 5, phoneDistractionLevel: 0},
    {phoneTime: 15, duration: 16, emotionScore: 7, phoneDistractionLevel: 0}
];
/*sort function*/
dataset.sort(function(a, b) {
    if (a.emotionScore >= b.emotionScore){
        return -1;
    }
    return 1; /*Sort the emotion score values ​​in descending order, so that the cold could draw big circles first, then small circles */
});

let xScale = d3.scaleLinear()
    .domain([0, 30])
    .range([margin, svgWidth - margin]);

let yScale = d3.scalePow().exponent(1.3)/*Make the circles distribute more evenly*/
    .domain([0, 10])
    .range([svgHeight - margin, margin]);

let circles = svg.selectAll("circle")
    .data(dataset)
    .join("circle");

/*Get the dynamic maximum and minimum values*/
let emotionScoreMax = d3.max(dataset, function(value){
    return value.emotionScore
});
let emotionScoreMin = d3.min(dataset, function(value){
    return value.emotionScore
})

let rScale = d3.scaleSqrt() /*Changed to Sqrt to reduce visual illusion*/
    .domain([emotionScoreMin, emotionScoreMax])
    .range([5, 20]);

circles.attr("r", function (value) {
    return rScale(value.emotionScore);/*Set circle radius based on emotion score*/
})
    .attr("cx", function (value) { 
        return xScale(value.phoneTime);/* Use scale to convert phoneTime value to X axis position */
    })
    .attr("cy", function (value) {
        return yScale(value.phoneDistractionLevel);/*Change the content of the Y-axis*/
    })
    .attr("fill", function(value){ /*Divide the phoneDistractionLevel values into three levels: low distraction (1–3) colored blue; medium distraction (4–7) colored orange; high distraction (8–10) colored pink*/
        if (value.phoneDistractionLevel <= 3) {
            return "blue";
        };
        if (value.phoneDistractionLevel <= 7) {
            return "orange";
        };
        if (value.phoneDistractionLevel <= 10) {
            return "pink";
        };
    })
    .attr("stroke", "black")  
    .attr("stroke-width", 0.5) 
    .attr("opacity", "0.5");
/*color legend*/ 
svg.append("text") /*legend title*/
    .attr("x", svgWidth - 220)
    .attr("y", svgHeight - margin - 95)
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .style("font-size", "13px")
    .text("Distraction Level");

let distractionColors = ["blue", "orange", "pink"];
let legendLabels = ["Low Distraction (1-3)", "Medium Distraction (4-7)", "High Distraction (8-10)"];
for (let i = 0; i < 3; i++) { /*a "for" loop of legend circle and text*/ 
    svg.append("circle")
        .attr("r", 8)
        .attr("cx", svgWidth - 220) 
        .attr("cy", svgHeight - margin - 80 + i * 25)
        .attr("fill", distractionColors[i]);
    
    svg.append("text")
        .text(legendLabels[i])
        .attr("text-anchor", "start")
        .attr("alignment-baseline", "middle")
        .style("font-size", "10px")
        .attr("x", svgWidth - 205)
        .attr("y", svgHeight - margin - 80 + i * 25);
} 

/*Draw the border of legend*/
svg.append("rect")
    .attr("x", svgWidth - 240)
    .attr("y", svgHeight - margin - 110)
    .attr("width", 170)
    .attr("height", 90)
    .style("fill", "none")  
    .style("stroke", "gray")  
    .style("stroke-width", "1px")  
    .style("stroke-dasharray", "0");


    /*This for loop creates three reference circles for the legend. 
    Each circle represents a different emotion score: smallest(1), approximately average size(5), and largest(10)*/ 
for (let i= 1; i<=3; i++) {
    let currentEmotion; /*Declare a variable for the current loop’s emotion score*/
    if (i === 1) { 
        currentEmotion = 2;
    } else if (i=== 2) { 
        currentEmotion = 5;
    } else if ( i=== 3){
        currentEmotion = 9;
    }
    /*draw circles*/
    svg.append("circle")
        .attr("r", rScale(currentEmotion)) /*Set the circle radius based on the scaled emotion score*/ 
        .attr("cx", margin +41)
        .attr("cy", i*35 - 9)
        .attr("fill", "black")
        .attr("opacity", "0.5");
    /* labels with units*/
    svg.append("text")
        .attr("x", margin + 65)
        .attr("y", i*35 - 9)
        .attr("alignment-baseline", "middle")
        .style("font-size", "10px")
        .text("Emotion Score:" + currentEmotion + "Points");
    }

/*Planning ahead for Title of the label*/
let LegendTitle = svg. append("text")
    .attr("x", margin +25)
    .attr("y", 15)
    .style("font-size", "13px")
    .attr("font-weight", "bold")
    .text("Emotion Score Legend")
/*Draw the border of legend*/
    svg.append("rect")
    .attr("x", margin + 16)
    .attr("y", 2)
    .attr("width", 160)
    .attr("height", 115)
    .style("fill", "none")  
    .style("stroke", "gray")  
    .style("stroke-width", "1px")  
    .style("stroke-dasharray", "0"); 


/*Draw the X-axis*/
svg.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(0))
    .attr("x2", xScale(30))
    .attr("y2", yScale(0))
    .attr("stroke", "black")
    .attr("stroke-width", 1);

/*Draw the Y-axis*/
svg.append("line")
    .attr("x1", xScale(0))
    .attr("y1", yScale(0))
    .attr("x2", xScale(0))
    .attr("y2", yScale(10))
    .attr("stroke", "black")
    .attr("stroke-width", 1);

/*X axis label*/
let xAxisLabel = svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - 3)
    .attr("text-anchor", "middle")
    .text("Phone Use Time (minutes)"); 

/*Y axis label*/
let yAxisLabel = svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", margin / 2 -14)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("Phone Distraction Level") 
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
    .attr("x", 30) /*Left margin position to keep label visible within canvas*/
    .attr("y", yScale(10))/*the max value of Y axis*/
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("10") 

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
    .text(String(25));

/* Add manual Y-axis tick labels to mark key values*/
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

/*main reference, Class_08_Slides.pdf, https://northeastern.instructure.com/courses/232461/files/37522751?module_item_id=12713716 */
