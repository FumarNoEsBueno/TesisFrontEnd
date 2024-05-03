import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ComprasService } from '../Services/compras.service';
import { MostradorCompraComponent } from '../Componentes/mostrador-compra/mostrador-compra.component';
import { Producto } from '../Classes/Producto';

@Component({
  selector: 'app-mostrador-seguimiento',
  standalone: true,
  imports: [CardModule,
    MostradorCompraComponent,
    ButtonModule,
    FormsModule,
    InputTextModule],
  templateUrl: './mostrador-seguimiento.component.html',
  styleUrl: './mostrador-seguimiento.component.css'
})
export class MostradorSeguimientoComponent {

  constructor(private compraService: ComprasService){}

  //No hace nada, este output solo existe para que
  //el routing no mande error
  @Output() agregarAlCarroOutput = new EventEmitter<void>();

  codigo: String = "";
  compras: Producto[] = [];

  revisarCompra(){
    if(this.codigo.length == 0) return;
    this.compraService.revisarCompra(this.codigo).subscribe({
      next: (res: any) => {
        this.compras = res.map((item: any) => new Producto(item));
        console.log(this.compras);
      },
      error: (err) => {
      }
    });
  }

}
