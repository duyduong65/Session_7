let Mobile = function (battery, inbox, sent, draft) {
    this.battery = battery;
    this.inbox = inbox;
    this.sent = sent;
    this.draft = draft;

    this.getInbox = function () {
        return this.inbox;
    };
    this.getSent = function () {
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
    nokia.getInbox().push(nokia.getSendMessageToIphone());
    nokia.getSent().push(nokia.getSendMessageToIphone());
    document.getElementById('messageNokia').value = "";
    document.getElementById('messageNokia').focus();
}

function showInboxIphone() {
    for (let i = 0; i < nokia.getInbox().length; i++) {
        document.getElementById('showInboxIphone').innerHTML += `Message ${i + 1} : ${nokia.getInbox()[i]} <br>`;
    }
}

function showSentIphone() {
    for (let i = 0; i < nokia.getInbox().length; i++) {
        document.getElementById('showSentNokia').innerHTML += `Message ${i + 1} : ${nokia.getInbox()[i]} <br>`;
    }
}

let iphone = new Mobile(78, [], [], []);

iphone.getBatteryIphone();

function sentToNokia() {
    iphone.getInbox().push(iphone.getSendMessageToNokia());
    iphone.getSent().push(iphone.getSendMessageToNokia());
    document.getElementById('messageIphone').value = "";
    document.getElementById('messageIphone').focus();
}

function showInboxNokia() {
    for (let i = 0; i < iphone.getInbox().length; i++) {
        document.getElementById('showInboxNokia').innerHTML += `Message ${i + 1} : ${iphone.getInbox()[i]} <br>`;
    }
}

function showSentNokia() {
    for (let i = 0; i < iphone.getInbox().length; i++) {
        document.getElementById('showSentIphone').innerHTML += `Message ${i + 1} : ${iphone.getInbox()[i]} <br>`;
    }

}

