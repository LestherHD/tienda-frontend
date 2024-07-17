import {Productos} from './Productos';
import {Pedidos} from './Pedidos';

export class DetallePedido {
  id: number;
  pedido: Pedidos;
  descripcion: string;
  cantidad: number;
  precio: number;
  producto: Productos;


  constructor(id: number, pedido: Pedidos, descripcion: string,
              cantidad: number, precio: number, producto: Productos) {
    this.id = id;
    this.pedido
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
    this.producto = producto;
  }
}
