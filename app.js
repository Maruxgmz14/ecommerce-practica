let productos = []; 
let totalCompra = 0;


let carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
let carrito = carritoGuardado ? carritoGuardado : [];


function agregarAlCarrito(indice) {
    let productoSeleccionado = productos[indice];
    carrito.push(productoSeleccionado);

localStorage.setItem("carrito", JSON.stringify(carrito));

totalCompra = carrito.reduce((sum, p) => sum + p.precio, 0);

actualizarCarrito();
continuarCompra();
}

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");

lista.innerHTML = "";

carrito.forEach((producto) => {
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} - $${producto.precio}`;
    lista.appendChild(item);
});

totalElemento.textContent = `Total: $${totalCompra}`;
}


function mostrarProductos() {
    const contenedor = document.getElementById("product-list");
    contenedor.innerHTML = "";

productos.forEach((producto, indice) => {
    const card = document.createElement("div");
    card.classList.add("producto");

    card.innerHTML = `
        <h4>${producto.nombre}</h4>
        <p>Precio: $${producto.precio}</p>
        <button>Agregar al carrito</button>
    `;

    const boton = card.querySelector("button");
    boton.addEventListener("click", () => {
        agregarAlCarrito(indice);
    });

    contenedor.appendChild(card);
});
}


async function cargarProductos() {
    try {
        const respuesta = await fetch("productos.json");

    if (!respuesta.ok) {
        throw new Error("Error al cargar el archivo JSON");
    }

    productos = await respuesta.json();
    mostrarProductos();   
        } catch (error) {
    console.error("Hubo un problema:", error);
    }
}

totalCompra = carrito.reduce((sum, p) => sum + p.precio, 0);
actualizarCarrito();
cargarProductos();










