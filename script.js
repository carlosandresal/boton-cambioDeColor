//"use strict";
//var background = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B", "#000000", "#FFFFFF"];

var btn = document.getElementById('bg');
var body = document.getElementById('body');
var color;

function randomColor(bckgArray) {
//    "use strict";
    var random = Math.floor(Math.random() * bckgArray.length);
    color = bckgArray[random];
    body.style.backgroundColor = color;
}


window.onload = function load() {
//    "use strict";
    var backgroundIni = ["#FF8A80", "#FF80AB", "#EA80FC", "#B388FF", "#8C9EFF", "#82B1FF", "#80D8FF", "#84FFFF", "#A7FFEB", "#B9F6CA", "#CCFF90", "#F4FF81", "#FFFF8D", "#FFE57F", "#FFD180", "#FF9E80", "#D7CCC8", "#CFD8DC", "#000000", "#FFFFFF"];
    randomColor(backgroundIni);
};

function changeBackground() {
//    "use strict";
    var backgroundBtn = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B", "#000000", "#FFFFFF"];
    btn.addEventListener("click", function () {
        randomColor(backgroundBtn);
    });
}
changeBackground();
