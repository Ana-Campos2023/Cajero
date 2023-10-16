
let usuarios = ["Ana", "Luis", "Eva", "Ian"];

let contraseñas = ["a12", "l13", "e14", "i15"];

let usuario = document.getElementById("usuario");
let contra = document.getElementById("password");
let ver;
inicio.addEventListener('click', () =>{
    for (let i = 0; i < usuarios.length; i++) {
        if (usuario.value === usuarios[i] && contra.value === contraseñas[i]) {
            alert('Inicio de sesión exitoso. ¡Bienvenid@, ' + usuario.value + '!');
            window.location.href = "cuenta.html"
            return;
        }
    }
    alert('Error: Usuario o contraseña incorrectos');
});

