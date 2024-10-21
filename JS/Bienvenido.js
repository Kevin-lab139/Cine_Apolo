const user = JSON.parse(localStorage.getItem("login_success")) || false
if(!user){
    window.location.href = "login.html"
}

const logout = document.querySelector("#logout");

logout.addEventListener("click", () =>{
    alert("Hasta pronto");
    localStorage.removeItem("login_success");
    window.location.href = "login.html"
})

const userName = JSON.parse(localStorage.getItem("users"))[0].name || "Usuario";

document.getElementById("userMenu").textContent = userName;