import { Component, EventEmitter, Output} from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ComprasService } from '../Services/compras.service';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Producto } from '../Classes/Producto';
import { MostradorProductoComponent } from '../Componentes/mostrador-producto/mostrador-producto.component';

@Component({
  selector: 'app-mostrador-periferico',
  standalone: true,
  imports: [CheckboxModule,
    ProgressSpinnerModule,
    FormsModule,
    MostradorProductoComponent,
    PaginatorModule,
    CardModule,
    AccordionModule],
  templateUrl: './mostrador-periferico.component.html',
  styleUrl: './mostrador-periferico.component.css'
})
export class MostradorPerifericoComponent {

  constructor(private compraService: ComprasService){}

  @Output() agregarAlCarroOutput = new EventEmitter<Producto>();

  perifericos: any;

  loading = true;

  first = 1;
  page = 1;
  rows: any;
  totalRecords: any;

  estados: any;
  estadosModel: string[] = [];
  marcas: any;
  marcasModel: string[] = [];
  disponibilidades: any;
  disponibilidadesModel: string[] = [];
  precios: any[] = [{
    precio_nombre: "0 - 10.000",
    id: 1
  },{
    precio_nombre: "10.001 - 20.000",
    id: 2
  },{
    precio_nombre: "20.001 - 30.000",
    id: 3
  }];
  preciosModel: any[] = [];

  ngOnInit(){
    this.compraService.getEstados().subscribe((res) => this.estados = res);
    this.compraService.getMarcas().subscribe((res) => this.marcas = res);
    this.compraService.getDisponibilidad().subscribe((res: any) =>{
      this.disponibilidades = res.filter((producto: any) => producto.disponibilidad_nombre !== 'Vendido');
    });
    this.compraService.getPerifericos().subscribe({
      next: (res: any) => {
        this.perifericos = res.data.map((item: any) => new Producto(item));
        this.rows = res.per_page;
        this.totalRecords = res.total;
        this.loading = false;
        console.log(res);
      },
      error: (err) => {
      }
    });
  }

  onPageChange(event: any){
  }

  onFilterChange(){}

  agregarAlCarro(periferico: Producto){
    this.agregarAlCarroOutput.emit(periferico);
  }
}
