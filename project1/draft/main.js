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

/* Draw a trumpeter */
/* Draw trumpeterHead color = #FFC9BF */
/* Using the vertex of the trumpeterBody as the origin point(75,70) */
let trumpeterX = 75;
let trumpeterY = 70;

let trumpeterHead = drawing.append("circle")
.attr("cx", trumpeterX)
.attr("cy", trumpeterY-20)
.attr("r", 20)
.attr("fill", "#FFC9BF");

/* Draw trumpeterLeftLeg */
let trumpeterLeftLeg = drawing.append("line")
.attr("x1", trumpeterX)
.attr("x2", trumpeterX)
.attr("y1", trumpeterY+125)
.attr("y2", trumpeterY+205)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterRightLeg */
let trumpeterRightLeg = drawing.append("line")
.attr("x1", trumpeterX+15)
.attr("x2", trumpeterX+15)
.attr("y1", trumpeterY+125)
.attr("y2", trumpeterY+205)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterBody color = #F7C5FA */
let trumpeterBody = drawing.append("polyline")
.attr("points", closedPolygon(trumpeterX,trumpeterY,
    trumpeterX-35,trumpeterY+135,
    trumpeterX,trumpeterY+125,
    trumpeterX+40,trumpeterY+135))
    .attr("fill", "#F7C5FA");

/* Draw trumpeterLeftFoot */
let trumpeterLeftFoot = drawing.append("line")
.attr("x1", trumpeterX)
.attr("x2", trumpeterX+10)
.attr("y1", trumpeterY+205)
.attr("y2", trumpeterY+210)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterRightFoot */
let trumpeterRightFoot = drawing.append("line")
.attr("x1", trumpeterX+15)
.attr("x2", trumpeterX+25)
.attr("y1", trumpeterY+205)
.attr("y2", trumpeterY+210)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterLeftUpperArm */
let trumpeterLeftUpperArm = drawing.append("line")
.attr("x1", trumpeterX+5)
.attr("x2", trumpeterX+40)
.attr("y1", trumpeterY+15)
.attr("y2", trumpeterY+5)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterLeftForearm */
let trunpeterLeftForearm = drawing.append("line")
.attr("x1", trumpeterX+40)
.attr("x2", trumpeterX+30)
.attr("y1", trumpeterY+5)
.attr("y2", trumpeterY-15)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterRightUpperArm */
let trumpeterRightUpperArm = drawing.append("line")
.attr("x1", trumpeterX+5)
.attr("x2", trumpeterX+45)
.attr("y1", trumpeterY+20)
.attr("y2", trumpeterY+10)
.attr("stroke", "black")
.attr("stroke-width", 1);

/* Draw trumpeterRightForearm */
let trunpeterRightForearm = drawing.append("line")
.attr("x1", trumpeterX+45)
.attr("x2", trumpeterX+55)
.attr("y1", trumpeterY+10)
.attr("y2", trumpeterY-15)
.attr("stroke", "black")
.attr("stroke-width", 1);


/* Draw trumpetbody color= #F7B325 */
let trumpetBody = drawing.append("rect")
.attr("x", trumpeterX+20)
.attr("y", trumpeterY-20)
.attr("width", 50)
.attr("height", 5)
.attr("fill","#F7B325" );

/* Draw trumpeterRightHand */
let trumpeterRightHand = drawing.append("rect")
.attr("x", trumpeterX+55)
.attr("y", trumpeterY-20)
.attr("width", 5)
.attr("height", 5)
.attr("fill", "black");

/*Draw trumpetBell (the quadrilateral structure) color= #F7B325 */
let trumpetBellQuadrilateral = drawing.append("polyline")
.attr("points", closedPolygon(trumpeterX+70, trumpeterY - 20,
  trumpeterX+70, trumpeterY-20,
  trumpeterX+95, trumpeterY-40,
  trumpeterX+95, trumpeterY+5,
  trumpeterX+70, trumpeterY-15))
  .attr("fill", "#F7B325");

/*Draw trumpetBell (the circle structure) color= #F7B325 */
let trumpetBellCircle = drawing.append("circle")
.attr("cx", trumpeterX+87.5)
.attr("cy", trumpeterY-17.5)
.attr("r", 12.5)
.attr("fill", "#F7B325");

/* Draw the widthways note line */
let noteLine1 = drawing.append("line")
.attr("x1", trumpeterX+120)
.attr("x2", trumpeterX+135)
.attr("y1", trumpeterY-50)
.attr("y2", trumpeterY-45)
.attr("stroke-width", 1)
.attr("stroke", "black");

/* Draw the left vertical note line */
let noteLine2 = drawing.append("line")
.attr("x1", trumpeterX+120)
.attr("x2", trumpeterX+120)
.attr("y1", trumpeterY-50)
.attr("y2", trumpeterY-25)
.attr("stroke-width", 1)
.attr("stroke", "black");

/* Draw the right vertical note line */
let noteLine3 = drawing.append("line")
.attr("x1", trumpeterX+135)
.attr("x2", trumpeterX+135)
.attr("y1", trumpeterY-45)
.attr("y2", trumpeterY-20)
.attr("stroke-width", 1)
.attr("stroke", "black");

/*Draw the left note circle  */
let noteLeftCircle = drawing.append("circle")
.attr("cx", trumpeterX+115)
.attr("cy", trumpeterX-25)
.attr("r", 5)
.attr("fill", "black");

/*Draw the Right note circle  */
let noteRightCircle = drawing.append("circle")
.attr("cx", trumpeterX+130)
.attr("cy", trumpeterX-20)
.attr("r", 5)
.attr("fill", "black");