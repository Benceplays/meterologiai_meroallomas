let on = true;
let ellenorzo = false;
var homerseklet = 17;
var paratartalom = 30;
var fenyerosseg = 1;
var legnyomas = 1020;

var homersekletm = 30;
var ehomerseklet = 900;
var ahomerseklet = 0;

function valtozok(){
    document.getElementById("homerseklet").innerHTML = "Hőmérséklet: " + homerseklet + "°";
    document.getElementById("paratartalom").innerHTML = "Páratartalom: " + paratartalom + "%";
    document.getElementById("fenyerosseg").innerHTML = "Fényerősség: " + fenyerosseg + "cd";
    document.getElementById("legnyomas").innerHTML = "Légnyomás: " + legnyomas + "hPa";
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
    alert("asd");
}

function casvariable(){
    if(homerseklet < 15){
        document.getElementById("hms").style.borderColor = "rgb(0, 62, 194)";
    }

    if(homerseklet > 15){
        document.getElementById("hms").style.borderColor = "rgb(255, 104, 59)";
    }
    
    document.getElementById("prs");
    document.getElementById("fnsborder");
    document.getElementById("lgs");
}

function atlaghomerseklet(){
    ahomerseklet = ehomerseklet / homersekletm;
}