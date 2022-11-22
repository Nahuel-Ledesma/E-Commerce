// GET
const listarProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json()).catch(error => console.log(error));

const crearProducto = (nombre, precio, descripcion, imgUrl) =>{
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, imgUrl, precio, descripcion})
    });
};


const eliminarProducto = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    });
};


const actualizarProducto = (nombre, imgUrl, descripcion, precio, id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, imgUrl, descripcion, precio})
    }).then((respuesta) => respuesta).catch((error) => alert("Ocurrió un error ", error));
}

const detallePerfil = () =>{
    return fetch(`http://localhost:3000/perfil/`).then((respuesta) => respuesta.json());
}

export const Services = {
    listarProductos,
    crearProducto,
    eliminarProducto,
    actualizarProducto,
    detallePerfil
}