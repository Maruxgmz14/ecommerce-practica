let productos = []; 
let totalCompra = 0;



// Recuperar carrito del localStorage
let carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
let carrito = carritoGuardado ? carritoGuardado : [];


// Agregar al carrito
function agregarAlCarrito(indice) {
  let productoSeleccionado = productos[indice];
  carrito.push(productoSeleccionado);

  localStorage.setItem("carrito", JSON.stringify(carrito));

  totalCompra = carrito.reduce((sum, p) => sum + p.precio, 0);

  actualizarCarrito();
  continuarCompra();
}

// Actualizar DOM del carrito
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

// Mostrar productos en pantalla
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

// Cargar productos vía fetch
async function cargarProductos() {
  try {
    const respuesta = await fetch("productos.json");

    if (!respuesta.ok) {
      throw new Error("Error al cargar el archivo JSON");
    }

    productos = await respuesta.json();
    mostrarProductos();   // 👉 AHORA SÍ se llama acá y funciona
  } catch (error) {
    console.error("Hubo un problema:", error);
  }
}
// Recalcular total basado en el carrito guardado
totalCompra = carrito.reduce((sum, p) => sum + p.precio, 0);
actualizarCarrito();
cargarProductos();










