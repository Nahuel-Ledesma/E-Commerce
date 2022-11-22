import { Services } from "../servicios/productos-servicios.js";

const formulario = document.querySelector("[data-login]");

formulario.addEventListener("submit", async(event) =>{
    event.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const contraseña = document.querySelector("[data-contraseña]").value;

    try{
        const perfil = await Services.detallePerfil();    

        if(perfil){
            perfil.forEach(persona => {
                if((nombre == persona.email) && (contraseña == persona.contraseña)){
                    alert('Bienvenido ' + persona.nombre);

                    setTimeout(function(){
                        window.location.href = "../../../index.html";                
                    },250);
                }
            });
        }else{
            throw new Error();
        }
    }catch(error){
        alert("Login erroneo");  
    }
});

