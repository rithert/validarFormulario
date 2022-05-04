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
        const menError =  document.querySelector("p.error");
        if(menError){
            menError.remove();
        }
        
        //elimina los colores de errores
        e.target.classList.remove('border','border-red-500')
        e.target.classList.add('border','border-green-500')
    }
    else{
        e.target.classList.remove('border','border-green-500')
        e.target.classList.add('border','border-red-500')
        mostrarError("Campo Obligatorio")
        pasoMal = true
    }

    if(e.target.type==='email'){
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(er.test(e.target.value)){
            const menError =  document.querySelector("p.error");
            if(menError){
                menError.remove();
            }
            e.target.classList.remove('border','border-red-500')
            e.target.classList.add('border','border-green-500')
        }
        else{
            e.target.classList.remove('border','border-green-500')
            e.target.classList.add('border','border-red-500')
            mostrarError("e-mail no valido")
        }
    }
}


function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje
    mensajeError.classList.add('border','border-red-500', 'background-color-100', 'text-red-500','p-3', 'm-3','error')

    const errores = document.querySelectorAll(".error")
    if(errores.length == 0){
        formulario.appendChild(mensajeError)
    }
}