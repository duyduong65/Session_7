function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}


function CreateCircle() {
    let radius = Math.floor(Math.random() * 100);
    let ctx = document.getElementById("MyCanvas").getContext("2d");
    let color = getRandomColor();
    let x = Math.random() * (window.innerWidth - radius);
    let y = Math.random() * (window.innerHeight - radius);
    let circle = new Circle(x, y, radius);

    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();

}

let n = 1;

setInterval(CreateCircle, 500);
