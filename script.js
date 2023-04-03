var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

function validate() {
    let status = true;
    var epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!epattern.test(username)) {
        alert("Invalid Email ID!");
        status = false;
    }
    if (password == "") {
        alert("Password cannot be empty")
    }

    alert("You have logged in successfully")
    username == "";
    password == "";
}