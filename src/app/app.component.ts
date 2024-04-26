import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PreviewCompraComponent } from './Componentes/preview-compra/preview-compra.component';
import { HttpClientModule } from '@angular/common/http';
import { DiscoDuro } from './Classes/discoDuro';

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
  discosDuros: DiscoDuro[] = [];

  abrirCarrito(){
    this.expandedCarrito = !this.expandedCarrito;
  }

  actualizarCarritoDiscosDuros(discosDuros: DiscoDuro[]){
    this.discosDuros = discosDuros;
  }

  subscribeToChildEvent(componentRef: any){
    componentRef.agregarAlCarroOutput.subscribe((res: DiscoDuro) => {
      this.expandedCarrito = true;
      if(!this.discosDuros.some(function(disco){
        return disco.id === res.id;
      })){
        this.discosDuros.push(res);
      }
    });
  }
}
