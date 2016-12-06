var background = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B", "#000000", "#FFFFFF"];

var btn = document.getElementById('bg');
var body = document.getElementById('body');

function randomColor() {
    var random = Math.floor(Math.random() * background.length);
    var color = background[random];
    body.style.backgroundColor = color;
}


window.onload = function load() {
    randomColor();
}

function changeBackground() {
    btn.addEventListener("click", function () {
        randomColor();
    });
}
changeBackground();

