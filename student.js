user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";

function logout(){
window.location = "chatty-login.html"
}