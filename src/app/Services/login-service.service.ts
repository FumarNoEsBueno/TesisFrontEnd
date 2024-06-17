import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url: string = "http://127.0.0.1:8000/api/";

  constructor(
    private http:HttpClient
  ) { }

  deleteDireccion(direccionId: any){
    let body = {id: direccionId}

    const token = this.getToken();
    const headers = new HttpHeaders().set("Authorization","Bearer " + token);

    return this.http.post(this.url + 'delete_direccion', body, { headers });
  }

  createDireccion(ciudadId: any, calleNombre: any){
    let body = {id: ciudadId, calle_nombre: calleNombre}
    const token = this.getToken();
    const headers = new HttpHeaders().set("Authorization","Bearer " + token);

    return this.http.post(this.url + 'create_direccion', body, { headers });
  }

  getRegiones(){
    return this.http.get(this.url + 'get_regiones');
  }

  getProvinciasPorRegion(regionId: any){
    return this.http.get(this.url + 'get_provincias_por_region?id='+regionId);
  }

  getCiudadesPorProvincia(provinciaId: any){
    return this.http.get(this.url + 'get_ciudades_por_provincia?id='+provinciaId);
  }

  getDirecciones(){
    const token = this.getToken();
    const headers = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.get(this.url + 'direcciones', { headers });
  }

  register(credentials: any){
    return this.http.post(this.url + 'register', credentials);
  }

  login(credentials: any){
    return this.http.post(this.url + 'login', credentials);
  }

  checkLogin(){
    const token = this.getToken();
    const headers = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.post(this.url + 'check_login',null , { headers });
  }

  getToken(){
    let token = localStorage.getItem( 'token' );
    return token;
  }

  cerrarSesion(){
    const token = this.getToken();
    const headers = new HttpHeaders().set("Authorization","Bearer " + token);
    return this.http.post(this.url + 'revoke_token',null , { headers });
  }
}
