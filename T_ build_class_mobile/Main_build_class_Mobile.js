let Mobile = function (inbox, sent, draft) {


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

    this.getSendMessageToIphone = function () {
        return this.getMessageNokia();
    };
    this.getSendMessageToNokia = function () {
        return this.getMessageIphone();
    };

};
let batteryNokia = 100;
let nokia = new Mobile([], [], []);
document.getElementById('batteryNokia').innerHTML = `Battery: ${batteryNokia} đv`;

function sentToIphone() {
    nokia.getInbox().push(nokia.getSendMessageToIphone());
    nokia.getSent().push(nokia.getSendMessageToIphone());
    document.getElementById('messageNokia').value = "";
    document.getElementById('messageNokia').focus();
    batteryNokia--;
    document.getElementById('batteryNokia').innerHTML = `Battery: ${batteryNokia} đv`;
}

function showInboxIphone() {
    document.getElementById('showInboxIphone').innerHTML = "";
    for (let i = 0; i < nokia.getInbox().length; i++) {
        document.getElementById('showInboxIphone').innerHTML += `Message ${i + 1} : ${nokia.getInbox()[i]} <br>`;
    }
    batteryIphone--;
    document.getElementById('batteryIphone').innerHTML = `Battery: ${batteryIphone} đv`;
}

function showSentIphone() {
    document.getElementById('showSentNokia').innerHTML = "";
    for (let i = 0; i < nokia.getInbox().length; i++) {
        document.getElementById('showSentNokia').innerHTML += `Message ${i + 1} : ${nokia.getInbox()[i]} <br>`;
    }
    batteryNokia--;
    document.getElementById('batteryNokia').innerHTML = `Battery: ${batteryNokia} đv`;
}

let batteryIphone = 100;
let iphone = new Mobile([], [], []);
document.getElementById('batteryIphone').innerHTML = `Battery: ${batteryIphone} đv`;

function sentToNokia() {
    iphone.getInbox().push(iphone.getSendMessageToNokia());
    iphone.getSent().push(iphone.getSendMessageToNokia());
    document.getElementById('messageIphone').value = "";
    document.getElementById('messageIphone').focus();
    batteryIphone--;
    document.getElementById('batteryIphone').innerHTML = `Battery: ${batteryIphone} đv`;
}

function showInboxNokia() {
    document.getElementById('showInboxNokia').innerHTML = "";
    for (let i = 0; i < iphone.getInbox().length; i++) {
        document.getElementById('showInboxNokia').innerHTML += `Message ${i + 1} : ${iphone.getInbox()[i]} <br>`;
    }
    batteryNokia--;
    document.getElementById('batteryNokia').innerHTML = `Battery: ${batteryNokia} đv`;
}

function showSentNokia() {
    document.getElementById('showSentIphone').innerHTML = "";
    for (let i = 0; i < iphone.getInbox().length; i++) {
        document.getElementById('showSentIphone').innerHTML += `Message ${i + 1} : ${iphone.getInbox()[i]} <br>`;
    }
    batteryIphone--;
    document.getElementById('batteryIphone').innerHTML = `Battery: ${batteryIphone} đv`;
}

