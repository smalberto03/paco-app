import { Component } from '@angular/core';
import { Pelicula } from '../pelicula';
import { IMDBService } from '../imdb.service';
import { AppComponent } from '../app.component';
import { IdbService } from '../idb.service';
import { MensajeComponent } from '../mensaje/mensaje.component';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  public observable: any
  public conexion: any
  constructor(private peliculaService: IMDBService) {
    this.conexion = new IdbService(this.iniciado.bind(this))
  }

  list() {
    let input: any = document.getElementById('npelicula')
    let url: any = "https://imdb-api.com/en/API/SearchMovie/k_b6wwrh4z/" + input.value

    this.peliculaService.getLista(url).subscribe(peliculas => this.observable = peliculas)
    new MensajeComponent().crearmensaje('Buscar Peliculas', 'Mostrando resultados de ' + input.value, 'exito')
  }

  iniciado() {
    //console.log('iniciado');
  }
  save(peli: Pelicula) {
    this.conexion.insertar(peli, this.insertarOK.bind(this))
  }

  insertarOK() {
    new MensajeComponent().crearmensaje('Insertado','Se ha agregado película favorita correctamente','exito')
  }

}

export class RepartoComponent {
    public observable: any
    public conexion: any
    constructor(private repartoService: IMDBService) {
      this.conexion = new IdbService(this.iniciado.bind(this))
    }

    iniciado()
    {

    }

    listarreparto() {
      let input: any = document.getElementById('nreparto')
      let url: any = "https://imdb-api.com/en/API/FullCast/k_12345678" + input.value

      this.repartoService.getLista(url).subscribe(reparto => this.observable = reparto)
      new MensajeComponent().crearmensaje('Buscar Peliculas', 'Mostrando resultados de ' + input.value, 'exito')
    }
}
