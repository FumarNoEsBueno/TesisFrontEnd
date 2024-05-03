import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PreviewCompraComponent } from './Componentes/preview-compra/preview-compra.component';
import { HttpClientModule } from '@angular/common/http';
import { Producto } from './Classes/Producto';

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
  title = 'TesisFrontEnd3';

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
}
