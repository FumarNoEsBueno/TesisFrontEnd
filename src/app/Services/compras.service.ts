import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Classes/Producto';

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

  revisarCompra(codigo: any){
    return this.http.get('http://127.0.0.1:8000/api/compras?codigo=' + codigo);
  }

  comprarObjetos(productos: Producto[]){
    let discosIds: any[] = [];
    let perifericosIds: any[] = [];
    let ramsIds: any[] = [];

    productos.forEach((producto) => {
      if(producto.tipoProducto == "disco") discosIds.push(producto.id);
      if(producto.tipoProducto == "periferico") perifericosIds.push(producto.id);
      if(producto.tipoProducto == "rams") ramsIds.push(producto.id);
    });
    let body = {discos: discosIds, perifericos: perifericosIds, rams: ramsIds};
    console.log(body);
    return this.http.post('http://127.0.0.1:8000/api/comprar', body);
  }

  getEstados(){
    return this.http.get('http://127.0.0.1:8000/api/parametros/estado');
  }

  getPerifericos(){
    return this.http.get('http://127.0.0.1:8000/api/perifericos');
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
    return this.http.get(url);
  }
}
