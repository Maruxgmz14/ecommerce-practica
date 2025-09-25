//let cantidadProductos = 0; 
let totalCompra = 0;

function continuarCompra() { 
    let respuesta = confirm("Agregaste un producto a tu carrito de manera exitosa! Deseas seguir comprando?");
    return respuesta;
}

do {
let productoElegido = parseInt(prompt("¿Qué prenda querés comprar?\n1) Remera\n2) Jeans\n3) Vestido\n4) Campera"));

if (productoElegido == 1){
    totalCompra = totalCompra + 13000;
        console.log("Total actual: $" + totalCompra);
seguirComprando = continuarCompra();
} else if (productoElegido == 2){
    totalCompra = totalCompra + 30000;
        console.log("Total actual: $" + totalCompra);
seguirComprando = continuarCompra();
} else if (productoElegido == 3){
    totalCompra = totalCompra + 23000;
        console.log("Total actual: $" + totalCompra);
seguirComprando = continuarCompra();
} else if (productoElegido == 4){
    totalCompra = totalCompra + 50000;
        console.log("Total actual: $" + totalCompra);
seguirComprando = continuarCompra();
} else{
    alert("Opción inexistente, volvé al menú principal")
}
    
} while (seguirComprando);

alert("El total de tu compra es de: $" + totalCompra);







