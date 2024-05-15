import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../Classes/Producto';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  url: string = "http://127.0.0.1:8000/api/";

  constructor(
    private http:HttpClient
  ) { }

  getDisponibilidad(){
    return this.http.get(this.url + 'parametros/disponibilidad');
  }

  getSistemaArchivos(){
    return this.http.get(this.url + 'parametros/sistema-archivos');
  }

  getTamano(){
    return this.http.get(this.url + 'parametros/tamano');
  }

  getMarcas(){
    return this.http.get(this.url + 'parametros/marca');
  }

  revisarCompra(codigo: any){
    return this.http.get(this.url + 'compras?codigo=' + codigo);
  }

  comprarObjetos(productos: Producto[],
                metodoPago: any,
                metodoDespacho: any,
                direccion: any){
    let discosIds: any[] = [];
    let perifericosIds: any[] = [];
    let ramsIds: any[] = [];

    productos.forEach((producto) => {
      if(producto.tipoProducto == "disco") discosIds.push(producto.id);
      if(producto.tipoProducto == "periferico") perifericosIds.push(producto.id);
      if(producto.tipoProducto == "rams") ramsIds.push(producto.id);
    });
    let body = {discos: discosIds,
        perifericos: perifericosIds,
        rams: ramsIds};
    let token = localStorage.getItem( 'token' );
    const headers = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.post(this.url + 'comprar', body, { headers });
  }

  getEstados(){
    return this.http.get(this.url + 'parametros/estado');
  }

  getPerifericos(){
    return this.http.get(this.url + 'perifericos');
  }

  getDiscosDuros(page:any, disponibilidad: string[], estado: string[], tamano: string[], marca: string[], sistemaArchivos: string[]){
    let url = this.url + 'discosDuros?page='+page;

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
