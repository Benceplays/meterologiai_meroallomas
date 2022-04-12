let on = true;
let ellenorzo = false;
var homerseklet = 17;
var paratartalom = 20;
var fenyerosseg = 1;
var legnyomas = 1020;

var homersekletm = 30;
var ehomerseklet = 900;
var ahomerseklet = 0;

const d = new Date();
let minutes = d.getMinutes();
let hour = d.getHours();

function valtozok(){
    document.getElementById("homerseklet").innerHTML = "Hőmérséklet: " + homerseklet + "°";
    document.getElementById("paratartalom").innerHTML = "Páratartalom: " + paratartalom + "%";
    document.getElementById("fenyerosseg").innerHTML = "Fényerősség: " + fenyerosseg + "cd";
    document.getElementById("legnyomas").innerHTML = "Légnyomás: " + legnyomas + "hPa";
}
function jelszonezes(){
    var x = document.getElementById("psw");
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
  }
}
function ora(){
    document.getElementById("ora").innerHTML = hour;
    document.getElementById("ora2").innerHTML = minutes;
}

function bejelentkezes(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;
    if (username == "Booby" && password == "Booby" || username == "DaW33D" && password == "DaW33D" || username == "ZoroXHun" && password == "ZoroXHun"){
        window.location = ("adminpanel.html");
    }
    else{
        alert("Sikertelen bejelentkezés!");
    }
}
function csuszi(element, x, y) {
    var ontitle = "ON";
    var offtitle = "OFF";
    if (on == true){
        document.getElementById("csuszi").style.position="relative";
        document.getElementById("csuszi").style.left="45%";
        document.getElementById("ontitle").innerHTML = offtitle;
        on = false;
    }
    else{
        document.getElementById("csuszi").style.position="relative";
        document.getElementById("csuszi").style.left="0%";
        document.getElementById("ontitle").innerHTML = ontitle;
        on = true;
    }
    console.log(on);
}
function elfogadasellenorzo(){
    if (document.getElementById("checkbox").checked == true){
        ellenorzo = true;
    }
    
    if (document.getElementById("checkbox").checked == false){
        ellenorzo = false;
    }
}
function resetdata(){
    if (ellenorzo == true){
        document.getElementById("reset");
        alert("A végleges törlésig 5 másodperc van vissza.");
    }
}
function infoclick(){
    document.getElementById("infobutton");
    alert("A csúszka segítségével kitudjuk kapcsolni a percenkénti mérést.");
}

function casvariable(){
    if(homerseklet < 15){
        document.getElementById("hms").style.borderColor = "rgb(0, 62, 194)";
    }

    if(homerseklet > 15){
        document.getElementById("hms").style.borderColor = "rgb(255, 104, 59)";
    }
    if(paratartalom < 30){
        document.getElementById("prs").style.borderColor ="rgb(51, 102, 255)";
    }
    if(paratartalom > 30){
        document.getElementById("prs").style.borderColor ="rgb(255, 102, 0)";
    }
    if(fenyerosseg < 1){
        document.getElementById("fnsborder").style.borderColor = "rgb(255, 255, 153";
    }
    if(fenyerosseg > 1){
        document.getElementById("fnsborder").style.borderColor = "rgb(51, 153, 255)";
    }
    if(legnyomas < 1100){
        document.getElementById("lgs").style.borderColor = "rgb(0, 102, 255)";
    }
    if(legnyomas > 1100){
        document.getElementById("lgs").style.borderColor = "rgb(0, 102, 255)";
    }
}

function atlaghomerseklet(){
    ahomerseklet = ehomerseklet / homersekletm;
}