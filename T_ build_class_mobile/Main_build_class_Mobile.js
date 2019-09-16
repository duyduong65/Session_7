let Mobile = function (battery, inbox, sent, draft) {
    this.battery = battery;
    this.inbox = inbox;
    this.sent = sent;
    this.draft = draft;

    this.getInboxNokia = function () {
        return this.inbox;
    };
    this.getSentNokia = function () {
        return this.sent;
    };
    this.getInboxIphone = function () {
        return this.inbox;
    };
    this.getSentIphone = function () {
        return this.sent;
    };

    this.getMessageNokia = function () {
        return document.getElementById('messageNokia').value;
    };
    this.getMessageIphone = function () {
        return document.getElementById('messageIphone').value;
    };

    this.getBatteryNokia = function () {
        document.getElementById('batteryNokia').innerHTML = `Battery: ${this.battery} đv`;
    };
    this.getBatteryIphone = function () {
        document.getElementById('batteryIphone').innerHTML = `Battery: ${this.battery} đv`;
    };
    this.getSendMessageToIphone = function () {
        return this.getMessageNokia();
    };
    this.getSendMessageToNokia = function () {
        return this.getMessageIphone();
    };

};
let nokia = new Mobile(25, [], [], []);
nokia.getBatteryNokia();

function sentToIphone() {
    nokia.getInboxNokia().push(nokia.getSendMessageToIphone());
    nokia.getSentNokia().push(nokia.getSendMessageToIphone());
    document.getElementById('messageNokia').value = "";
    document.getElementById('messageNokia').focus();
}

function showInboxIphone() {
    for (let i = 0; i < nokia.getInboxNokia().length; i++) {
        document.write(`Message ${i + 1} : ${nokia.getInboxNokia()[i]} <br>`);
    }
}

let iphone = new Mobile(78, [], [], []);

iphone.getBatteryIphone();

function sentToNokia() {
    iphone.getInboxIphone().push(iphone.getSendMessageToNokia());
    iphone.getSentIphone().push(iphone.getSendMessageToNokia());
    document.getElementById('messageIphone').value = "";
    document.getElementById('messageIphone').focus();
}

function showInboxNokia() {
    for (let i = 0; i < iphone.getInboxIphone().length; i++) {
        document.write(`Message ${i + 1} : ${iphone.getInboxIphone()[i]} <br>`);
    }
}
