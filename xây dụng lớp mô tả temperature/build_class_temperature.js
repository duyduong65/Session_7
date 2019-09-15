let Temperature = function (celsius) {
    this.celsius = celsius;

    this.getCelsius = function () {
        return this.celsius;
    };
    this.getConvertToF = function () {
        return this.celsius * 1.8 + 32;
    };
    this.getConvertToK = function () {
        return this.celsius + 273.15;
    };
};
let temp = new Temperature(25);
let F = temp.getConvertToF();
let K = temp.getConvertToK();
alert(`${temp.getCelsius()} độ C = ${F} độ F`);
alert(`${temp.getCelsius()} độ K = ${K} độ K`);
