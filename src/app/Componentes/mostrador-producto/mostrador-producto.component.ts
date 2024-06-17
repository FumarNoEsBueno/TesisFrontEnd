import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Producto } from '../../Classes/Producto';

@Component({
  selector: 'app-mostrador-producto',
  standalone: true,
  imports: [
    CardModule,
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

  ngOnInit(){
    console.log(this.producto);
  }

  anadirAlCarrito(){
    this.agregarAlCarro.emit(this.producto);
  }

  mostrarDetalles(){
    this.visible = true;
  }

}
