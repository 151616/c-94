user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";

function add_room(){
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
}

function logout(){
    window.location = "teacher-logout.html";
}