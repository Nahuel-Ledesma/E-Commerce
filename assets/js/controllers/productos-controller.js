import { Services } from "../servicios/productos-servicios.js";

const nuevoProducto = (nombre, precio, imgUrl) => {
    const card = document.createElement("div");
    
    const contenido = ` <div class="productos__totales">    
                            <div class="producto">
                                <img src="${imgUrl}" alt="caneca">
                                <p class="descripcion">${nombre}</p>
                                <p class="precio">${precio}</p>
                                <a href="">Ver Producto</a>
                            </div>
                        </div>`;
                  
    card.innerHTML = contenido;
    card.classList.add("card");
    return card;
}

const producto = document.querySelector("[data-products]");

const render = async () =>{
    try{
        const productos = await Services.listarProductos();
        
        if(productos){
            productos.forEach(elemento => {
                producto.appendChild(nuevoProducto(elemento.nombre, elemento.precio, elemento.imgUrl));
            });
        }else{
            throw new Error();
        }
    }catch(error){
        //alert(error);
    }
}

render();