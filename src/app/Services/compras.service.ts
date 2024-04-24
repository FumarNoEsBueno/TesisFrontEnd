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

  getDiscosDuros(page:any, disponibilidad: string[], estado: string[], tamano: string[], marca: string[], sistemaArchivos: string[]){
    let url = 'http://127.0.0.1:8000/api/discosDuros?page='+page;

    disponibilidad.forEach((e: String) => {
      url = url + '&disponibilidad[]='+e;
    });
    estado.forEach((e: String) => {
      url = url + '&estado[]='+e;
    });
    tamano.forEach((e: String) => {
      url = url + '&tamano[]='+e;
    });
    marca.forEach((e: String) => {
      url = url + '&marca[]='+e;
    });
    sistemaArchivos.forEach((e: String) => {
      url = url + '&sistema_archivos[]='+e;
    });
    console.log(url);
    return this.http.get(url);
  }
}
