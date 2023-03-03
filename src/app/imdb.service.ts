import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class IMDBService {
  constructor(
    private http: HttpClient) {
  }

  getLista(url: string): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(url)
  }

}