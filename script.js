
function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    let status = "true";

    if (username === "") {
        document.getElementById("usernameError").innerText = "Please enter a valid Email ID!";
        status = "false";
    }
    if (password === "") {
        alert("Password cannot be empty");
        status = "false";
    }
    if (status === "true") {
        document.getElementById("passwordError").innerText = "You have logged in successfully";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}