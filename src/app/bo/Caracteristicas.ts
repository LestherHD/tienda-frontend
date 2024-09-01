export class Caracteristicas {
  id: number;
  nombre: string;
  seleccionado: boolean;
  visible: boolean;
  listaValores: string[];
  precio: number;

  constructor(id: number, nombre: string){
    this.id = id;
    this.nombre = nombre;
  }
}
