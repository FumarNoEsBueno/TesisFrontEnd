import { Component } from '@angular/core';
import { ComprasService } from '../../Services/compras.service';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-historial-recepcion',
  standalone: true,
  imports: [ScrollPanelModule,
    CardModule],
  templateUrl: './historial-recepcion.component.html',
  styleUrl: './historial-recepcion.component.css'
})
export class HistorialRecepcionComponent {

  constructor(private comprasService: ComprasService) { }

  listaRecepcion: any;

  ngOnInit(){
    this.comprasService.getHistorialRecepcion().subscribe({
      next: (res: any) => {
        this.listaRecepcion = res.data;
      },
    });
  }
}
