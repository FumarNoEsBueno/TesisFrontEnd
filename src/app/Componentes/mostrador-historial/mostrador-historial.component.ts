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
  discos: Producto[] = [];

  ngOnInit(){
    this.compra.discos.forEach((disco: any) => {
      this.discos.push(new Producto(disco));
    });
    console.log(this.compra);
  }
}
