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

function drawSquare() {
    let  ctx = document.getElementById("MyCanvas").getContext("2d");
    let square = new Rectangle(20,40);
    ctx.beginPath();
    ctx.rect(500,333,square.height,square.width);
    ctx.fillStyle = "red"
    ctx.fill();
}
drawSquare();