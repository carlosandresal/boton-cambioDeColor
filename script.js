//var background = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B", "#000000", "#FFFFFF"];

var btn = document.getElementById('bg');
var body = document.getElementById('body');

function randomColor(bckgArray) {
    var random = Math.floor(Math.random() * bckgArray.length);
    var color = bckgArray[random];
    body.style.backgroundColor = color;
}


window.onload = function load() {
    var backgroundIni = ["#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B", "#000000", "#FFFFFF"];
    randomColor(backgroundIni);
}

function changeBackground() {
    var backgroundBtn = ["#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B", "#000000", "#FFFFFF"];
    btn.addEventListener("click", function () {
        randomColor(backgroundBtn);
    });
}
changeBackground();
