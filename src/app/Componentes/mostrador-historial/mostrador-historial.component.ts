import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MostradorCompraComponent } from '../mostrador-compra/mostrador-compra.component';
import { Producto } from '../../Classes/Producto';

@Component({
  selector: 'app-mostrador-historial',
  standalone: true,
  imports: [CardModule,
    MostradorCompraComponent,
    ScrollPanelModule],
  templateUrl: './mostrador-historial.component.html',
  styleUrl: './mostrador-historial.component.css'
})
export class MostradorHistorialComponent {

  @Input() compra: any;
  producto: Producto[] = [];

  ngOnInit(){
    this.compra.discos.forEach((disco: any) => {
      this.producto.push(this.anadirPivote(disco));
    });
    this.compra.perifericos.forEach((periferico: any) => {
      this.producto.push(this.anadirPivote(periferico));
    });
    this.compra.rams.forEach((ram: any) => {
      this.producto.push(this.anadirPivote(ram));
    });
    this.compra.cables.forEach((cables: any) => {
      this.producto.push(this.anadirPivote(cables));
    });
  }

  anadirPivote(producto: any){
        let response = new Producto(producto)
        response.descuento = producto.pivot.descuento_id;
        console.log(response.descuento);
        return response;
  }
}
