let Mobile = function (name) {
    this.name = name;
    this.battery = 100;
    this.inbox = [];
    this.outbox = [];
    this.msg = "";

    this.writeMsg = function (value) {
        this.msg = value;
    };
    this.receiveMsg = function (msg, name) {
        this.inbox.push(msg);
    };
    this.sendMsg = function (name) {
        this.outbox.push(this.msg);
        name.receiveMsg(this.msg, this.name);
    };
};

let Nokia = new Mobile("Nokia");
document.getElementById('batteryNokia').innerHTML = `Battery: ${Nokia.battery} %`;

function sentToIphone() {
    let msg = document.getElementById('messageNokia').value;
    Nokia.writeMsg(msg);
    Nokia.receiveMsg(msg, Iphone);
    Nokia.sendMsg(Iphone);
    document.getElementById('messageNokia').value = "";
    document.getElementById('messageNokia').focus();
    Nokia.battery--;
    document.getElementById('batteryNokia').innerHTML = `Battery: ${Nokia.battery} %`;

};

function showInboxIphone() {

    document.getElementById('showInboxIphone').innerHTML = "";
    for (let i = 0; i < Iphone.inbox.length; i++) {
        document.getElementById('showInboxIphone').innerHTML += `Message ${i + 1} : ${Iphone.inbox[i]} <br>`;
    }
    Iphone.battery--;
    document.getElementById('batteryIphone').innerHTML = `Battery: ${Iphone.battery} %`;
}

function showSentIphone() {
    document.getElementById('showInboxIphone').innerHTML = "";
    for (let i = 0; i < Iphone.inbox.length; i++) {
        document.getElementById('showSentNokia').innerHTML += `Message ${i + 1} : ${Iphone.inbox[i]} <br>`;
    }
    Nokia.battery--;
    document.getElementById('batteryNokia').innerHTML = `Battery: ${Nokia.battery} %`;
}

let Iphone = new Mobile("Iphone");
document.getElementById('batteryIphone').innerHTML = `Battery: ${Iphone.battery} %`;

function sentToNokia() {
    let msg = document.getElementById('messageIphone').value;
    Iphone.writeMsg(msg);
    Iphone.receiveMsg(msg, Iphone);
    Iphone.sendMsg(Nokia);
    document.getElementById('messageIphone').value = "";
    document.getElementById('messageIphone').focus();
    Iphone.battery--;
    document.getElementById('batteryIphone').innerHTML = `Battery: ${Iphone.battery} %`;
}

function showInboxNokia() {
    document.getElementById('showInboxNokia').innerHTML = "";
    for (let i = 0; i < Nokia.inbox.length; i++) {
        document.getElementById('showInboxNokia').innerHTML += `Message ${i + 1} : ${Nokia.inbox[i]} <br>`;
    }
    Nokia.battery--;
    document.getElementById('batteryNokia').innerHTML = `Battery: ${Nokia.battery} %`;
}

function showSentNokia() {
    document.getElementById('showInboxNokia').innerHTML = "";
    for (let i = 0; i < Nokia.inbox.length; i++) {
        document.getElementById('showSentIphone').innerHTML += `Message ${i + 1} : ${Nokia.inbox[i]} <br>`;
    }
    Iphone.battery--;
    document.getElementById('batteryIphone').innerHTML = `Battery: ${Iphone.battery} %`;
}

