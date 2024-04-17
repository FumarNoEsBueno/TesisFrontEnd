import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(
    private http:HttpClient
  ) { }

  getEstados(){
    return this.http.get('http://127.0.0.1:8000/api/parametros/estado');
  }
  apiCall(){
    return this.http.get('http://127.0.0.1:8000/api/test');
  }
}
