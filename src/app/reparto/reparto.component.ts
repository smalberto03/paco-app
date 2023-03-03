import { Component } from '@angular/core';
import { IdbService } from '../idb.service';
import { Pelicula } from '../pelicula';
//import {Reparto} from '../reparto';

@Component({
  selector: 'app-reparto',
  templateUrl: './reparto.component.html',
  styleUrls: ['./reparto.component.css']
})
export class RepartoComponent {
  public conexion: any
  public listadoActores: any

  constructor() {
    this.conexion = new IdbService(this.iniciar.bind(this))
  }

  iniciar()
  {
    this.conexion.listar(this.listarOk.bind(this))
  }

  listarOk(object: Array<Pelicula>) { //me qieda cambiar esto
    this.listadoActores = object

  }
}
