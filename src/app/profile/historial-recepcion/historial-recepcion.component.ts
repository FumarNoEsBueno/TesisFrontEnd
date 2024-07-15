import { Component } from '@angular/core';
import { ComprasService } from '../../Services/compras.service';

@Component({
  selector: 'app-historial-recepcion',
  standalone: true,
  imports: [],
  templateUrl: './historial-recepcion.component.html',
  styleUrl: './historial-recepcion.component.css'
})
export class HistorialRecepcionComponent {

  constructor(private comprasService: ComprasService) { }

  listaRecepcion: any;

  ngOnInit(){
    this.comprasService.getHistorialRecepcion().subscribe({
      next: (res: any) => {
        this.listaRecepcion = res;
      },
    });
  }
}
