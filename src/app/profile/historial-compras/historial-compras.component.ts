import { Component } from '@angular/core';
import { ComprasService } from '../../Services/compras.service';
import { MostradorHistorialComponent } from '../../Componentes/mostrador-historial/mostrador-historial.component';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-historial-compras',
  standalone: true,
  imports: [CardModule,
    PaginatorModule,
    MostradorHistorialComponent],
  templateUrl: './historial-compras.component.html',
  styleUrl: './historial-compras.component.css'
})
export class HistorialComprasComponent {

  constructor(private comprasService: ComprasService) { }

  listaCompras: any;
  first = 1;
  page = 1;
  rows: any;
  totalRecords: any;

  ngOnInit(){
    this.comprasService.getHistorialCompras(this.page).subscribe({
      next: (res: any) => {
        this.listaCompras = res.data;
        this.rows = res.per_page;
        this.totalRecords = res.total;
      },
    });
  }
  onPageChange(event: any){
    this.page = event.page + 1;
    this.comprasService.getHistorialCompras(this.page).subscribe({
      next: (res: any) => {
        this.listaCompras = res.data;
        this.rows = res.per_page;
        this.totalRecords = res.total;
      },
    });
  }
}
