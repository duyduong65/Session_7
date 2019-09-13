let Circle = function (radius) {
    this.radius = radius;

    this.getRadius = function () {
        return this.radius;
    };
    this.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
};
let circle = new Circle(2);
let radius = circle.getRadius();
let area = circle.getArea();

alert("radius " + radius + "; area " + area);