let Mobile = function (battery,typing) {
    this.battery = battery;
    this.inbox = inbox;

    this.getBattery = function () {
        document.getElementById('battery').innerHTML = `Battery:${this.battery} đv`;
    }

};
let nokia = new Mobile(25,[]);
nokia.getBattery();