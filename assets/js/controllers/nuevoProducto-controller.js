import {Services} from '../servicios/productos-servicios.js';

const formulario = document.querySelector("[data-producto-nuevo]");

formulario.addEventListener("submit", async(evento) =>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio  = document.querySelector("[data-precio]").value;
    const descripcion  = document.querySelector("[data-descripcion]").value;
    const imagen  = document.querySelector("[data-imagen]").files[0].name;
    const urlImg = `assets/images/${imagen}`;

    try{
        const producto = await Services.crearProducto(nombre, precio, descripcion, urlImg);    
        if(producto){
            alert('Producto agregado correctamente');   
            setTimeout(window.location.href = "../../../index.html",3000);           
        }else{
            throw new Error();
        }
    }catch(error){
        alert("Error al cargar producto");
    }
});