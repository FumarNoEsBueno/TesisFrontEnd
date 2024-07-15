import { Component } from '@angular/core';
import { ComprasService } from '../../Services/compras.service';
import { MostradorHistorialComponent } from '../../Componentes/mostrador-historial/mostrador-historial.component';

@Component({
  selector: 'app-historial-compras',
  standalone: true,
  imports: [MostradorHistorialComponent],
  templateUrl: './historial-compras.component.html',
  styleUrl: './historial-compras.component.css'
})
export class HistorialComprasComponent {

  constructor(private comprasService: ComprasService) { }

  listaCompras: any;

  ngOnInit(){
    this.comprasService.getHistorialCompras().subscribe({
      next: (res: any) => {
        this.listaCompras = res.data;
      },
    });
  }
}
