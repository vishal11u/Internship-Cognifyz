document.addEventListener('DOMContentLoaded', function () {
    var ColorRandom = document.getElementById("Btn");

    ColorRandom.addEventListener('click', function () {
        var randomColor = getRandomColor();
        ColorRandom.style.backgroundColor = randomColor;
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

// Greeting time Alert Message ---------------------------------------------//
var currTime = new Date();
var currHr = currTime.getHours();

var Greeting;
if (currHr < 12) {
    Greeting = 'Good Morning';
} else if (currHr < 16) {
    Greeting = 'Good Afternoon';
} else {
    Greeting = 'Good Night';
}

alert(currTime + '\n' + Greeting);


// Calculator Code ----------------------------------------------------------//
function Calcu() {
    var Number1 = parseFloat(document.getElementById("No1").value);
    var Number2 = parseFloat(document.getElementById("No2").value);

    if (isNaN(Number1) || isNaN(Number2)) {
        alert("Please Enter Numbers");
    } else {
        var total = Number1 + Number2;
        document.getElementById("total").innerText = 'Total: ' + total;
    }
};