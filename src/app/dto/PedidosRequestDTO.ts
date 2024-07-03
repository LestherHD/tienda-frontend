import {Pedidos} from '../bo/Pedidos';

export class SucursalesRequestDTO {

  pedidos: Pedidos;
  page: number;
  size: number;

  constructor(pedidos: Pedidos, page: number, size: number) {
    this.pedidos = pedidos;
    this.page = page;
    this.size = size;
  }
}
