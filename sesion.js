
const usuario = document.querySelector("#Usuario")
const contraseña = document.querySelector("#Contraseña")
const iniciar = document.querySelector("#boton")

const BBDD = [{
    usuario: "maximo",
    contraseña: "1234"
}]

const login = {
    usuario: "",
    contraseña: "" 
}

usuario.addEventListener("input", (event) => {
    login.usuario = event.target.value
})

contraseña.addEventListener("input", (event) => {
    login.contraseña = event.target.value
})

iniciar.addEventListener("click", () => {
    const usuarioCorrecto = BBDD.find(user => {
        return user.usuario === login.usuario && user.contraseña === login.contraseña
    })
    if(usuarioCorrecto !== undefined){
        const loged = {id: "maximo", key: "***"}
        localStorage.setItem("session", loged)
        window.location.href = "index.html"      
    } else {
        alert("Usuario Incorrecto, intentelo nuevamente.")
    }
})

