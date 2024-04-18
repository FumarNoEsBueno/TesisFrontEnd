import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(
    private http:HttpClient
  ) { }

  getDisponibilidad(){
    return this.http.get('http://127.0.0.1:8000/api/parametros/disponibilidad');
  }

  getSistemaArchivos(){
    return this.http.get('http://127.0.0.1:8000/api/parametros/sistema-archivos');
  }

  getTamano(){
    return this.http.get('http://127.0.0.1:8000/api/parametros/tamano');
  }

  getMarcas(){
    return this.http.get('http://127.0.0.1:8000/api/parametros/marca');
  }

  getEstados(){
    return this.http.get('http://127.0.0.1:8000/api/parametros/estado');
  }

  getDiscosDuros(){
    return this.http.get('http://127.0.0.1:8000/api/discosDuros');
  }
}
