function aplicarImpuestos(productos) {
  const productosConImpuesto = [];

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    if (producto.precio > 50) {
      const nuevoPrecio = +(producto.precio * 1.1).toFixed(2);

      const productoActualizado = {
        nombre: producto.nombre,
        precio: nuevoPrecio,
      };

      productosConImpuesto.push(productoActualizado);
    }
  }

  return productosConImpuesto;
}

const productos = [
  { nombre: "Camisa", precio: 45 },
  { nombre: "Zapatos", precio: 80 },
];

const resultado = aplicarImpuestos(productos);
console.log(resultado);
