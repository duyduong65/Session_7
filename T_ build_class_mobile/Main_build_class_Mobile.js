let Mobile = function (msg, inbox, outbox, battery) {
    this.battery = battery;
    this.message = msg;
    this.inbox = inbox;
    this.outbox = outbox;

    this.getBattery = function () {
        return this.battery;
    };
    this.getWriter = (value) => {
        this.message = value;
    };
    this.getSendMess = (mobile) => {
        mobile.getReceiver(this.message);
        this.outbox.push(this.message);
        this.getDecreaseBattery();
    };
    this.getReceiver = (mess) => {
        this.inbox.push(mess);
    };
    this.getDecreaseBattery = () => {
        this.battery--;
    };
};

let Nokia = new Mobile("", [], [], 100);
let Iphone = new Mobile("", [], [], 100);

function sendMess(mobile_1, mobile_2) {
    mobile_1.getSendMess(mobile_2);
    display();
}

display();

function display() {
    document.getElementById('showInboxNokia').innerHTML += showResult(Nokia.inbox);
    document.getElementById('showOutboxNokia').innerHTML += showResult(Nokia.outbox);
    document.getElementById('showInboxIphone').innerHTML += showResult(Iphone.inbox);
    document.getElementById('showOutboxIphone').innerHTML += showResult(Iphone.outbox);
    document.getElementById('inputMessageNokia').value = "";
    document.getElementById('inputMessageIphone').value = "";
    document.getElementById('batteryNokia').innerHTML = `Battery: ${Nokia.getBattery()}`;
    document.getElementById('batteryIphone').innerHTML = `Battery: ${Iphone.getBattery()}`;
}

function showResult(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str = "Message " + (i + 1) + ": " + arr[i] + "<br>";
    }
    return str;
}
