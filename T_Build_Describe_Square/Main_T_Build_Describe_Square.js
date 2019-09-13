let Rectangle = function (height, width) {

    this.height = height;
    this.width = width;

    this.getHeight = function () {
        return this.height;
    };
    this.getWidth = function () {
        return this.width;
    };
    this.getPerimeter = function () {
        return (this.height + this.width) * 2;
    };
    this.getAcreage = function () {
        return this.width * this.height;
    }
};
let height = Number(prompt("nhập vào chiều dài: "));
let width = Number(prompt("Nhập vào chiều rộng: "));
let x = Math.floor(Math.random()*window.innerHeight);
let y = Math.floor(Math.random()*window.innerWidth);

function drawSquare() {
    let ctx = document.getElementById("MyCanvas").getContext("2d");
    let square = new Rectangle(height, width);
    ctx.beginPath();
    ctx.rect(x, y, square.height, square.width);
    ctx.fillStyle = "red"
    ctx.fill();
    alert("Chu vi hình chữ nhật: " + square.getPerimeter());
    alert("diện tích hình chữ nhật là: " + square.getAcreage());
}

drawSquare();