// Importación de la clase desde index.js
const CarritoCompra = require("../index");

// Aquí se define una suite de pruebas
describe("Clase CarritoCompra", () => {
  let carrito; //Esta variable va a almacenar una instancia de la clase CarritoCompra

  beforeEach(() => {
    //Esta función crea una nueva instancia de la clase CarritoCompra y la almacena dentro de la variable carrito
    carrito = new CarritoCompra();
  });

  //Esta prubeva verifica si el producto se añade con la función agregar Producto
  it("debería agregar un producto al carrito", () => {
    const articulo = { nombre: "Producto 1", precio: 100 };
    carrito.agregarProducto(articulo);

    expect(carrito.productos.length).toBe(1);
    expect(carrito.productos[0]).toBe(articulo);
  });

  //Esta prueva verifica si la funcion calcularTotal, calculo el costo total del carrito
  it("debería calcular el total de la compra", () => {
    const producto1 = { nombre: "Producto 1", precio: 100 };
    const producto2 = { nombre: "Producto 2", precio: 200 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);

    const total = carrito.calcularTotal();

    expect(total).toBe(300);
  });

  //Esta prueva verifica si la funcion totalDescuento, calcula el costo final del carrito aplicando un descuento
  it("debería aplicar un descuento al total de la compra", () => {
    const producto1 = { nombre: "Producto 1", precio: 100 };
    const producto2 = { nombre: "Producto 2", precio: 200 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);

    const totalConDescuento = carrito.aplicarDescuento(10);
    expect(totalConDescuento).toBe(270);
  });
});
