import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PreviewCompraComponent } from './Componentes/preview-compra/preview-compra.component';
import { HttpClientModule } from '@angular/common/http';
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
              private router: Router) { }

  title = 'TesisFrontEnd';

  email: string = "default";
  password: string = "default";

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
      this.login();
    }

    if(componentRef.actualizarLoginData != null){
      componentRef.actualizarLoginData.subscribe((res: any) => {
        this.email = res.email;
        this.password = res.password;
        this.login();
      });
    }
  }

  login(){

      let credentials = {
        email: this.email,
        password: this.password
      };

      this.loginService.checkLogin(credentials).subscribe((res: any) => {
        if(res){
          this.router.navigate(['/profile'])
        }else{
          this.router.navigate(['/login'])
        }
      });
  }
}
