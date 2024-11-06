import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { Producto } from '../../Classes/Producto';

@Component({
  selector: 'app-mostrador-compra',
  standalone: true,
  imports: [ButtonModule, CardModule, ImageModule],
  templateUrl: './mostrador-compra.component.html',
  styleUrl: './mostrador-compra.component.css'
})
export class MostradorCompraComponent {

  @Input() producto: any;
  @Input() eliminable: boolean = true;

  @Output() eliminarCompra = new EventEmitter<Producto>();

  precioFinal: any;

  ngOnInit(){
    if(this.producto.descuento == null){
      this.precioFinal = this.producto.precio;
    }else{
    this.precioFinal = Math.round((this.producto.precio)*(100 - this.producto.descuento) / 100);
    }
  }

  eliminarDiscoDuro(){
    this.eliminarCompra.emit(this.producto);
  }

}
