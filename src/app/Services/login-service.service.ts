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
