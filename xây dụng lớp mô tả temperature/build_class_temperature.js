let Temperature = function (celsius) {
    this.celsius = celsius;

    this.getCelsius = function () {
        return this.celsius;
    };
    this.getConvertToF = function () {
        return (this.getCelsius * 1.8) + 32;
    };
    this.getConvertToK = function () {
        return this.getCelsius + 273.15;
    };
};
let temp = new Temperature(25);

alert(`${temp.getConvertToF()}`);
