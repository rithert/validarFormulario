const btnEnviar = document.querySelector("#enviar")


//variables del formulario
const email = document.querySelector("#email")
const asunto = document.querySelector("#asunto")
const mensaje = document.querySelector("#mensaje")
const formulario = document.querySelector("#enviar-mail")


eventListeners()

function eventListeners(){
    //inicia con la app
    document.addEventListener("DOMContentLoaded",iniciarApp);
    //validadcio de formulario
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);
}

//aCCIONES QUE SE QUIERES HACER LA CARGAR EL DOCUMENTO
function iniciarApp(){
    btnEnviar.disable = true
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}

function validarFormulario(e){
    if(e.target.value.length > 0){
        console.log("Si hay txt")
    }
    else{
        e.target.classList.add('border','border-red-500')
        mostrarError()
    }
}


function mostrarError(){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = "Todos los campos son obligatorios"
    mensajeError.classList.add('border','border-red-500', 'background-color-100', 'text-red-500','p-3', 'm-3','error')

    const errores = document.querySelectorAll(".error")
    if(errores.length == 0){
        formulario.appendChild(mensajeError)
    }

    
}