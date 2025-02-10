function aplicarImpuestos(productos) {
  return productos
    .filter(producto => producto.precio > 50)
    .map(producto => ({
      ...producto,
      precio: +(producto.precio * 1.1).toFixed(2)
    }));
}

const productos = [
  { nombre: "Camisa", precio: 46 },
  { nombre: "Zapatos", precio: 80 }
];

const resultado = aplicarImpuestos(productos);
console.log(resultado);
