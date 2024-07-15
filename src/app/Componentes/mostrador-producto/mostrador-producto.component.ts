import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Producto } from '../../Classes/Producto';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-mostrador-producto',
  standalone: true,
  imports: [
    CardModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    ImageModule
  ],
  templateUrl: './mostrador-producto.component.html',
  styleUrl: './mostrador-producto.component.css'
})


export class MostradorProductoComponent {

  @Input() producto: any;
  @Output() agregarAlCarro = new EventEmitter<Producto>();

  visible = false;
  cantidadProducto: any;

  ngOnInit(){
    if(this.producto.tipoProducto == "cable"){
      this.cantidadProducto = Array.from({ length: this.producto.cantidad }, (_, index) => index + 1);
    }
  }

  anadirAlCarrito(){
      this.agregarAlCarro.emit(this.producto);
  }

  mostrarDetalles(){
    this.visible = true;
  }

}
