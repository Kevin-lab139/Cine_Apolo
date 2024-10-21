const registroform = document.querySelector("#registroform");
registroform.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const apellidos = document.querySelector("#apellidos").value;
    const documentoIdentidad = document.querySelector("#documentoIdentidad").value;
    const numeroDocumento = document.querySelector("#numeroDocumento").value;
    const fechaNacimiento = document.querySelector("#date").value;
    const genero = document.querySelector("#genero").value;
    const telefono = document.querySelector("#telefono").value;
    const correo = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const usuarioregistrado = users.find(user => user.email === correo);
    if(usuarioregistrado){
        return alert("El correo que has puesto ya está registrado");
    }

    users.push({name: name, apellidos: apellidos, documentoIdentidad: documentoIdentidad, numeroDocumento: numeroDocumento, date: fechaNacimiento, genero: genero, telefono: telefono, email: correo, password: password});
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro exitoso");

})  
