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

  getTipoEntrada(){
    return this.http.get(this.url + 'parametros/tipo_entrada');
  }

  getTipoPeriferico(){
    return this.http.get(this.url + 'parametros/tipo_periferico');
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

  getHistorialCompras(page: any){
    let token = localStorage.getItem( 'token' );
    const headers = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.post(this.url + 'get_compras_by_user_id?page=' + page, null, { headers });
  }

  getCapacidadRam(){
    return this.http.get(this.url + 'parametros/capacidad_ram');
  }

  getEstados(){
    return this.http.get(this.url + 'parametros/estado');
  }

  getMetodoDespacho(){
    return this.http.get(this.url + 'parametros/despacho');
  }

  getCables(page:any,
          estado: string[],
          marca: string[],
          tipoEntrada: string[],
          precio: number[],){

    let url = this.url + 'cables?page='+page;

    estado.forEach((e: String) => {
      url = url + '&estado[]='+e;
    });
    marca.forEach((e: String) => {
      url = url + '&marca[]='+e;
    });
    tipoEntrada.forEach((e: String) => {
      url = url + '&tipoEntrada[]='+e;
    });
    precio.forEach((e: number) => {
      url = url + '&precio[]='+e;
    });

    return this.http.get(url);
  }

  getPerifericos(page:any,
          estado: string[],
          marca: string[],
          tipoEntrada: string[],
          tipoPeriferico: string[],
          precio: number[],){
    let url = this.url + 'perifericos?page='+page;

    estado.forEach((e: String) => {
      url = url + '&estado[]='+e;
    });
    marca.forEach((e: String) => {
      url = url + '&marca[]='+e;
    });
    tipoEntrada.forEach((e: String) => {
      url = url + '&tipoEntrada[]='+e;
    });
    tipoPeriferico.forEach((e: String) => {
      url = url + '&tipoPeriferico[]='+e;
    });
    precio.forEach((e: number) => {
      url = url + '&precio[]='+e;
    });

    return this.http.get(url);
  }

  getRams(page:any,
          estado: string[],
          marca: string[],
          capacidad: string[],
          tipo: string[],
          velocidad: string[],
          tamano: string[],
          precio: number[],
          ){

    let url = this.url + 'rams?page='+page;

    estado.forEach((e: String) => {
      url = url + '&estado[]='+e;
    });
    marca.forEach((e: String) => {
      url = url + '&marca[]='+e;
    });
    capacidad.forEach((e: String) => {
      url = url + '&capacidad[]='+e;
    });
    tipo.forEach((e: String) => {
      url = url + '&tipo[]='+e;
    });
    velocidad.forEach((e: String) => {
      url = url + '&velocidad[]='+e;
    });
    tamano.forEach((e: String) => {
      url = url + '&tamano[]='+e;
    });
    precio.forEach((e: number) => {
      url = url + '&precio[]='+e;
    });

    return this.http.get(url);
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

  getCablesRecomendados(entradaNombre: any){
    return this.http.get(this.url + 'get_cable_recomendado?tipoEntrada=' + entradaNombre);
  }

  cambiarContraseña(nuevaContraseña: any, contraseñaActual: any){
    let token = localStorage.getItem( 'token' );
    const headers = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.post(this.url + 'update_password', {actual:contraseñaActual,contrasena_nueva: nuevaContraseña}, { headers });
  }


}
