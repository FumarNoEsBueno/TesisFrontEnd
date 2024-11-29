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

  title = 'BioBioReciclajeSpa';

  mobile: boolean = true;
  mobileStyles = { marginLeft: '11%', marginRight: '11%' };
  sessionToken: any;
  expandedCarrito = false;
  productos: Producto[] = [];
  costoTotal: number = 0;
  childComponent: any;

  ngOnInit(){
    if(window.innerWidth <= 800){
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }

  abrirCarrito(){
    this.expandedCarrito = !this.expandedCarrito;
  }

  actualizarCarritoDiscosDuros(productos: Producto[]){
    this.productos = productos;
    this.costoTotal = 0;
    this.productos.forEach((producto) => {
      if(producto.tipoProducto == "cable"){
        if(producto.descuento){
        }else{
          this.costoTotal += producto.precio * producto.cantidad_seleccionada;
        }
      }else{
        if(producto.descuento){
          this.costoTotal += Math.round((producto.precio)*(100 - producto.descuento) / 100);
        }else{
          this.costoTotal += producto.precio;
        }
      }
    });
  }

  recargarPagina(){
    this.childComponent.reload();
  }

  subscribeToChildEvent(componentRef: any){
    this.childComponent = componentRef;
    if(componentRef.agregarAlCarroOutput != null){
      componentRef.agregarAlCarroOutput.subscribe((res: Producto) => {
        this.agregarProductoAlCarrito(res);
        this.generarTokenDeCarrito();
      });
    }
  }

  agregarProductoAlCarrito(res: any){
        this.expandedCarrito = true;
        if(!this.productos.some(function(producto){
          return ((producto.id === res.id) && !(producto.tipoProducto != res.tipoProducto));
        })){
          if(res.tipoProducto == "cable"){
            if(res.descuento){
              this.costoTotal += Math.round((res.precio)*(100 - res.descuento) / 100) * res.cantidad_seleccionada;
            }else{
              this.costoTotal += res.precio * res.cantidad_seleccionada;
            }
          }else{
            if(res.descuento){
              this.costoTotal += Math.round((res.precio)*(100 - res.descuento) / 100);
            }else{
              this.costoTotal += res.precio;
            }
          }
          this.productos.push(res);
        }
  }

  generarTokenDeCarrito(){
    let token = this.productos;
    localStorage.setItem('midTechCarritoDeComprasToken', JSON.stringify(token));
  }

  leerTokenDeCarrito(){
    let token = localStorage.getItem( 'midTechCarritoDeComprasToken' );
    return token;
  }

}
