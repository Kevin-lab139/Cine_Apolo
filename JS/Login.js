const loginform = document.querySelector("#loginform");
loginform.addEventListener("submit", (e) =>{
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(user => user.email === email, password === password);
    if(!validUser){
        return alert("Usuario y/o contraseña incorrecta");
    }
    alert(`Bienvenido ${validUser.name}`);
    localStorage.setItem("login_success", JSON.stringify(validUser))
    window.location.href = "Bienvenido.html";
})