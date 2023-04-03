
function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    let status = "true";

    if (username === "") {
        alert("Please enter a valid Email ID!");
        status = "false";
    }
    if (password === "") {
        alert("Password cannot be empty");
        status = "false";
    }
    if (status === "true") {
        alert("You have logged in successfully");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}