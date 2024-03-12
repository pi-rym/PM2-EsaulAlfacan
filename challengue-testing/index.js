// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes método
class CarritoCompra {
  // constructor(): Inicializa el carrito como un array vacío.
  constructor() {
    this.productos = [];
  }
  // agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  // calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
  calcularTotal() {
    let costoCarrito = 0;
    for (let i = 0; i < this.productos.length; i++) {
      costoCarrito += this.productos[i].precio;
    }
    return costoCarrito;
  }
  // aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
  aplicarDescuento(porcentaje) {
    let descuento = porcentaje / 100;
    let costoCarrito = this.calcularTotal();
    return costoCarrito - costoCarrito * descuento;
  }
}

module.exports = CarritoCompra;
