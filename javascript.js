let on = true;
let ellenorzo = false;
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
    ontitle = "ON"
    offtitle = "OFF"
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
    console.log(on)
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
        alert("A végleges törlésig 5 másodperc van vissza.")
    }
}
function infoclick(){
    document.getElementById("infobutton");
    alert("asd")
}