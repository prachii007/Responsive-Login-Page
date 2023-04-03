
function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    var epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


    let status = "true";

    if (username === "" || !epattern.test(username)) {
        document.getElementById("usernameError").innerText = "Please enter a valid Email ID!";
        status = "false";
    } else {
        document.getElementById("usernameError").innerText = ""
    }
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password cannot be empty";
        status = "false";
    } else {
        document.getElementById("passwordError").innerText = ""
    }
    if (status === "true") {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        alert("You have logged in successfully");
    }
}