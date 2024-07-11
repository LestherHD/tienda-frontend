import {TipoProducto} from './TipoProducto';

export class Productos {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: any;
  tipoProducto: TipoProducto;
  caracteristicas: any;
  estado: string;

  //Se usarán para filtros únicamente
  rangoPrecioInicio: number;
  rangoPrecioFin: number;

  //Para guardar imagen
  imageSrc: string;

  constructor(id: number, nombre: string, descripcion: string, precio: number, imagen: any,
              tipoProducto: TipoProducto, rangoPrecioInicio: number, rangoPrecioFin: number, caracteristicas: any,
              estado: string) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
    this.tipoProducto = tipoProducto;
    this.rangoPrecioInicio = rangoPrecioInicio;
    this.rangoPrecioFin = rangoPrecioFin;
    this.caracteristicas = caracteristicas;
    this.estado = estado;
  }
}
