let totalCompra = 0;

function continuarCompra() { 
    let respuesta = confirm("Agregaste un producto a tu carrito de manera exitosa! Deseas seguir comprando?");
    return respuesta;
}
const productos =[
    {nombre:"Remera", precio:13000},
    {nombre:"Jeans", precio:30000},
    {nombre:"Vestido", precio:23000},
    {nombre:"Campera", precio:50000},

];
localStorage.setItem('productos',JSON.stringify(productos));

let carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
if(carritoGuardado==null){
    carrito=[]
} else{
    carrito=carritoGuardado
}

function agregarAlCarrito(indice) {
    let productoSeleccionado = productos[indice];
    carrito.push(productoSeleccionado);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    totalCompra += productoSeleccionado.precio;
    console.log("Total actual: $" + totalCompra);
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
    contenedor.innerHTML = ""; // limpia el contenedor por si se vuelve a renderizar

    productos.forEach((producto, indice) => {
    // crear un div para cada producto
    const card = document.createElement("div");
    card.classList.add("producto");

    // contenido de la tarjeta
    card.innerHTML = `
        <h4>${producto.nombre}</h4>
        <p>Precio: $${producto.precio}</p>
        <button>Agregar al carrito</button>
    `;

    // botón de agregar
    const boton = card.querySelector("button");
    boton.addEventListener("click", () => {
        agregarAlCarrito(indice);
        actualizarCarrito(); // esta la haremos después 😉
    });

    contenedor.appendChild(card);
    });
}
mostrarProductos();


/*do {
    let productoElegido = parseInt(prompt("¿Qué prenda querés comprar?\n1) Remera\n2) Jeans\n3) Vestido\n4) Campera"));

    if (isNaN(productoElegido)) {
        alert("Por favor, ingresá un número válido.");
    } else if (productoElegido < 1 || productoElegido > productos.length) {
        alert("Opción inexistente, volvé al menú principal");
    } else {
        agregarAlCarrito(productoElegido - 1);
        seguirComprando = continuarCompra();
    }

} while (seguirComprando);


alert("El total de tu compra es de: $" + totalCompra);
*/






