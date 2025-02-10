function actualizarStock(productos, id, nuevoStock) {
    const producto = productos.find(producto => producto.id === id);
    
    if (producto) {
      producto.stock = nuevoStock;
      return productos;
    }
    
    return null;
  }
  
  const productos = [
    { id: 1, nombre: "Lápiz", stock: 10 },
    { id: 2, nombre: "Cuaderno", stock: 5 }
  ];
  
  const resultado = actualizarStock(productos, 2, 20);
  console.log(resultado);
