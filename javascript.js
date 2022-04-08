function bejelentkezes(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;
    if (username == "Booby" && password == "Booby" || username == "DaW33D" && password == "DaW33D" || username == "ZoroXHun" && password == "ZoroXHun"){
        alert("Sikeres bejelentkezés!");
        window.location = ("adminpanel.html");
    }
    else{
        alert("Sikertelen bejelentkezés!");
    }
}