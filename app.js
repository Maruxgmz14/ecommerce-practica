//let cantidadProductos = 0; 
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

do {
let productoElegido = parseInt(prompt("¿Qué prenda querés comprar?\n1) Remera\n2) Jeans\n3) Vestido\n4) Campera"));

if (productoElegido == 1){
    let productoSeleccionado = productos[0];
        carrito.push(productoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
            totalCompra = totalCompra + 13000;
        console.log("Total actual: $" + totalCompra);
seguirComprando = continuarCompra();
} else if (productoElegido == 2){
    let productoSeleccionado = productos[1];
        carrito.push(productoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    totalCompra = totalCompra + 30000;
        console.log("Total actual: $" + totalCompra);
seguirComprando = continuarCompra();
} else if (productoElegido == 3){
    let productoSeleccionado = productos[2];
        carrito.push(productoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    totalCompra = totalCompra + 23000;
        console.log("Total actual: $" + totalCompra);
seguirComprando = continuarCompra();
} else if (productoElegido == 4){
    let productoSeleccionado = productos[3];
        carrito.push(productoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    totalCompra = totalCompra + 50000;
        console.log("Total actual: $" + totalCompra);
seguirComprando = continuarCompra();
} else{
    alert("Opción inexistente, volvé al menú principal")
}
    
} while (seguirComprando);

alert("El total de tu compra es de: $" + totalCompra);







