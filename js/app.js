const btnEnviar = document.querySelector("#enviar")
const btnReset = document.querySelector("#resetBtn")


//variables del formulario
const email = document.querySelector("#email")
const asunto = document.querySelector("#asunto")
const mensaje = document.querySelector("#mensaje")
const formulario = document.querySelector("#enviar-mail")
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        


eventListeners()

function eventListeners(){
    //inicia con la app
    document.addEventListener("DOMContentLoaded",iniciarApp);
    //validadcio de formulario
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);
    //Reinicia el formulario
    btnReset.addEventListener('click',limpiaFormulario);
    //enviar email
    formulario.addEventListener('submit',enviarEmail)
}

//aCCIONES QUE SE QUIERES HACER LA CARGAR EL DOCUMENTO
function iniciarApp(){
    btnEnviar.disabled = true
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

    if(er.test(email.value) && asunto.value!=="" && mensaje.value!==""){
        console.log("campos validados")
        btnEnviar.disable = false
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')
    }else{
        console.log("Aun faltan campos")
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


///envia email

function enviarEmail(e){
    e.preventDefault();
    const spinner = document.querySelector('#spinner')
    spinner.style.display = 'flex'
    //despues de 3 segundos se desaparece
    setTimeout(()=>{
        spinner.style.display = 'none'
        //mensaje de satifaccion
        const mensajeExito = document.createElement('p')
        mensajeExito.classList.add('text-center', 'my-10','p-5','bg-green-500','text-white','font-bold')
        mensajeExito.textContent="Email enviado"
        //inserta el mensaje de exito antes del spinnner
        formulario.insertBefore(mensajeExito,spinner)
        setTimeout(()=>{
            mensajeExito.remove() //eliminar el mensaje de exito
            limpiaFormulario()
        },2000)
    },3000);
}

//limpia el formulario
function limpiaFormulario(e){
    e.preventDefault()
    formulario.reset()
    iniciarApp()

}