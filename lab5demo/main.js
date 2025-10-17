"use strict"

document.getElementById("action").addEventListener("click", processForm);



let xInput, yInput, choice;

function processForm() {
    xInput = Number(document.getElementById("xInput").value);
    yInput = Number(document.getElementById("yInput").value);
    choice = document.getElementById("trumpeterOption").value;
    drawing.selectAll('svg>*').remove();
    trumpeter(drawing, xInput, yInput, true, choice);
}

let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");


