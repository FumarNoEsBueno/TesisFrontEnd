import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PreviewCompraComponent } from './Componentes/preview-compra/preview-compra.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Producto } from './Classes/Producto';
import {Router} from "@angular/router"
import { LoginServiceService } from './Services/login-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PreviewCompraComponent,
    HttpClientModule,
    NavBarComponent,
    RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private loginService: LoginServiceService,
              private http:HttpClient,
              private router: Router) { }

  title = 'TesisFrontEnd';

  sessionToken: any;
  expandedCarrito = false;
  productos: Producto[] = [];
  costoTotal: number = 0;
  childComponent: any;

  abrirCarrito(){
    this.expandedCarrito = !this.expandedCarrito;
  }

  actualizarCarritoDiscosDuros(productos: Producto[]){
    this.productos = productos;
    this.costoTotal = 0;
    this.productos.forEach((producto) => {
      this.costoTotal += producto.precio;
    });
  }

  recargarPagina(){
    this.childComponent.reload();
  }

  subscribeToChildEvent(componentRef: any){
    this.childComponent = componentRef;
    if(componentRef.agregarAlCarroOutput != null){
      componentRef.agregarAlCarroOutput.subscribe((res: Producto) => {
        this.expandedCarrito = true;
        if(!this.productos.some(function(producto){
          return ((producto.id === res.id) && !(producto.tipoProducto != res.tipoProducto));
        })){
          this.costoTotal += res.precio;
          this.productos.push(res);
        }
      });
    }

    if(componentRef.requestLogin != null){
    }
  }

}
