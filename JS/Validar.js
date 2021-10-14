


function validarUsuario(){
    let user = document.forms["formulario"]["usuario"].value;
    let psw = document.forms["formulario"]["contraseña"].value;
    if (user == "Alex" && psw == "examen") {
        sessionStorage.setItem("IngresoCorrecto", "True")
        return true;
         }

        sessionStorage.setItem("IngresoCorrecto", "False")
        alert("Ingrese correctamente su usuario y contraseña")
        return false;
}
