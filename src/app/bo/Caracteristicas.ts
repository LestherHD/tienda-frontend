export class Caracteristicas {
  id: number;
  nombre: string;
  seleccionado: boolean;
  visible: boolean;
  listaValores: string[];

  constructor(id: number, nombre: string){
    this.id = id;
    this.nombre = nombre;
  }
}
