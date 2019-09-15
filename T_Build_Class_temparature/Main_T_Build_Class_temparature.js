let temparature = {
    inputCelsius: function (celsius) {
        this.celsius = celsius;
        this.getCelsius = function () {
            return this.celsius;
        }
    },
    convertToF: function () {
        this.F = function () {
            return (this.getCelsius() * 1.8) + 32;
        };
        alert(`${this.getCelsius()}  độ C = ${this.F} độ F`);
    }


};
let temp = new temparature;
