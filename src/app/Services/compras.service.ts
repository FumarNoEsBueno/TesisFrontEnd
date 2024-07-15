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

  getTipoRam(){
    return this.http.get(this.url + 'parametros/tipo_ram');
  }

  getVelocidadRam(){
    return this.http.get(this.url + 'parametros/velocidad_ram');
  }

  getTamanoRam(){
    return this.http.get(this.url + 'parametros/tamano_ram');
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
    let cablesId: any[] = [];
    let cablesCantidad: any[] = [];

    productos.forEach((producto) => {
      if(producto.tipoProducto == "disco") discosIds.push(producto.id);
      if(producto.tipoProducto == "periferico") perifericosIds.push(producto.id);
      if(producto.tipoProducto == "ram") ramsIds.push(producto.id);
      if(producto.tipoProducto == "cable"){
        cablesId.push(producto.id);
        cablesCantidad.push(producto.cantidad_seleccionada);
      }
    });
    let body = {discos: discosIds,
        perifericos: perifericosIds,
        rams: ramsIds,
        cablesId: cablesId,
        cablesCantidad: cablesCantidad,
        metodoPago: metodoPago,
        metodoDespacho: metodoDespacho,
        direccionId: direccion
    };
    let token = localStorage.getItem( 'token' );
    const headers = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.post(this.url + 'comprar', body, { headers });
  }

  createSolicitud(body: any){
    let token = localStorage.getItem( 'token' );
    const headers = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.post(this.url + 'create_recepcion', body, { headers });
  }

  getHistorialRecepcion(){
    let token = localStorage.getItem( 'token' );
    const headers = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.post(this.url + 'get_recepcion_paginated_by_user_id', null, { headers });
  }

  getHistorialCompras(){
    let token = localStorage.getItem( 'token' );
    const headers = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.post(this.url + 'get_compras_by_user_id', null, { headers });
  }

  getEstados(){
    return this.http.get(this.url + 'parametros/estado');
  }

  getMetodoDespacho(){
    return this.http.get(this.url + 'parametros/despacho');
  }

  getCables(){
    return this.http.get(this.url + 'cables');
  }

  getPerifericos(){
    return this.http.get(this.url + 'perifericos');
  }

  getRams(){
    return this.http.get(this.url + 'rams');
  }

  getDiscosDuros(page:any,
                 disponibilidad: string[],
                 estado: string[],
                 tamano: string[],
                 marca: string[],
                 precio: number[],
                 capacidad: number[],
                 esperanza: number[],
                 horas: number[],
                 sistemaArchivos: string[]){

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
    precio.forEach((e: number) => {
      url = url + '&precio[]='+e;
    });
    capacidad.forEach((e: number) => {
      url = url + '&capacidad[]='+e;
    });
    esperanza.forEach((e: number) => {
      url = url + '&esperanza[]='+e;
    });
    horas.forEach((e: number) => {
      url = url + '&horas[]='+e;
    });
    sistemaArchivos.forEach((e: String) => {
      url = url + '&sistema_archivos[]='+e;
    });
    return this.http.get(url);
  }

  getProductosNuevos(){
    return this.http.get(this.url + 'get_productos_nuevos');
  }

}
