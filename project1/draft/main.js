"use strict"

/*  Variable that enables you to "talk to" your SVG drawing canvas. */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

/* Draw a border that matches the maximum drawing area for this assignment.
    Assign the border to a variable so that:
        (1) We know what the purpose of the shape is, and
        (2) We will have the ability to change it later (in a future assignment)
*/
let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

/* Write your code for Project 1 beneath this comment */
/* Draw a trumpeter */
/* Draw trumpeterHead color = #FFC9BF */
let trumpeterHead = drawing.append("circle")
.attr("cx", 75)
.attr("cy", 50)
.attr("r", 20)
.attr("fill", "#FFC9BF");

/* Draw trumpeterLeftLeg */
let trumpeterLeftLeg = drawing.append("line")
.attr("x1", 75)
.attr("x2", 75)
.attr("y1", 195)
.attr("y2", 275)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterRightLeg */
let trumpeterRightLeg = drawing.append("line")
.attr("x1", 90)
.attr("x2", 90)
.attr("y1", 195)
.attr("y2", 275)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterBody color = #F7C5FA */
let trumpeterBody = drawing.append("polyline")
.attr("points", closedPolygon(75,70,
    40,205,
    75,195,
    115,205))
    .attr("fill", "#F7C5FA");

/* Draw trumpeterLeftFoot */
let trumpeterLeftFoot = drawing.append("line")
.attr("x1", 75)
.attr("x2", 85)
.attr("y1", 275)
.attr("y2", 280)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterRightFoot */
let trumpeterRightFoot = drawing.append("line")
.attr("x1", 90)
.attr("x2", 100)
.attr("y1", 275)
.attr("y2", 280)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterLeftUpperArm */
let trumpeterLeftUpperArm = drawing.append("line")
.attr("x1", 80)
.attr("x2", 115)
.attr("y1", 85)
.attr("y2", 75)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterLeftForearm */
let trunpeterLeftForearm = drawing.append("line")
.attr("x1", 115)
.attr("x2", 105)
.attr("y1", 75)
.attr("y2", 55)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterRightUpperArm */
let trumpeterRightUpperArm = drawing.append("line")
.attr("x1", 80)
.attr("x2", 120)
.attr("y1", 90)
.attr("y2", 80)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterRightForearm */
let trunpeterRightForearm = drawing.append("line")
.attr("x1", 120)
.attr("x2", 130)
.attr("y1", 80)
.attr("y2", 55)
.attr("stroke", "black")
.attr("stroke-width", 1);


/* Draw trumpetbody color= #D69820 */
let trumpetBody = drawing.append("rect")
.attr("x", 95)
.attr("y", 50)
.attr("width", 50)
.attr("height", 5)
.attr("fill","#D69820" );

/* Draw trumpeterRightHand */
let trumpeterRightHand = drawing.append("rect")
.attr("x", 130)
.attr("y", 50)
.attr("width", 5)
.attr("height", 5)
.attr("fill", "black");

/*Draw trumpetBell (the quadrilateral structure) color= #F7B325 */
let trumpetBellQuadrilateral = drawing.append("polyline")
.attr("points", closedPolygon(145, 50,
  145, 50,
  170, 30,
  170, 75,
  145, 55))
  .attr("fill", "#F7B325");

/*Draw trumpetBell (the circle structure) color= #F7B325 */
let trumpetBellCircle = drawing.append("circle")
.attr("cx", 162.5)
.attr("cy", 52.5)
.attr("r", 12.5)
.attr("fill", "#F7B325");

/* Draw the widthways note line */
let noteLine1 = drawing.append("line")
.attr("x1", 195)
.attr("x2", 210)
.attr("y1", 20)
.attr("y2", 25)
.attr("stroke-width", 1)
.attr("stroke", "black");

/* Draw the left vertical note line */
let noteLine2 = drawing.append("line")
.attr("x1", 195)
.attr("x2", 195)
.attr("y1", 20)
.attr("y2", 45)
.attr("stroke-width", 1)
.attr("stroke", "black");

/* Draw the right vertical note line */
let noteLine3 = drawing.append("line")
.attr("x1", 210)
.attr("x2", 210)
.attr("y1", 25)
.attr("y2", 50)
.attr("stroke-width", 1)
.attr("stroke", "black");

/*Draw the left note circle  */
let noteLeftCircle = drawing.append("circle")
.attr("cx", 190)
.attr("cy", 45)
.attr("r", 5)
.attr("fill", "black");

/*Draw the Right note circle  */
let noteRightCircle = drawing.append("circle")
.attr("cx", 205)
.attr("cy", 50)
.attr("r", 5)
.attr("fill", "black");