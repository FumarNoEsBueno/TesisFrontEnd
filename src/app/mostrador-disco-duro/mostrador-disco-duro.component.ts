import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { ComprasService } from '../Services/compras.service';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PreviewDiscoDuroComponent } from '../Componentes/preview-disco-duro/preview-disco-duro.component';


@Component({
  selector: 'app-mostrador-disco-duro',
  standalone: true,
  imports: [CheckboxModule,
    FormsModule,
    PreviewDiscoDuroComponent,
    CardModule,
    AccordionModule],
  templateUrl: './mostrador-disco-duro.component.html',
  styleUrl: './mostrador-disco-duro.component.css'
})
export class MostradorDiscoDuroComponent {

  discosDuros: any;
  estados: any;
  estadosModel: string[] = [];
  marcas: any;
  marcasModel: string[] = [];
  tamanos: any;
  tamanosModel: string[] = [];
  sistemaArchivos: any;
  sistemaArchivosModel: string[] = [];
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
  capacidades: any[] = [{
    capacidad_nombre: "0 GB - 100 GB",
    id: 1
  },{
    capacidad_nombre: "100 GB - 250 GB",
    id: 2
  },{
    capacidad_nombre: "251 GB - 500 GB",
    id: 3
  },{
    capacidad_nombre: "500 GB - 1000 GB",
    id: 4
  },{
    capacidad_nombre: "1000 GB - 2000 GB",
    id: 5
  }];
  capacidadesModel: string[] = [];
  esperanzas: any[] = [{
    esperanza_nombre: "No se como indicar la esperzanda de vida de un disco duro :V",
    id: 1
  },{
    esperanza_nombre: "No se como indicar la esperzanda de vida de un disco duro :V",
    id: 2
  },{
    esperanza_nombre: "No se como indicar la esperzanda de vida de un disco duro :V",
    id: 3
  },{
    esperanza_nombre: "No se como indicar la esperzanda de vida de un disco duro :V",
    id: 4
  }];
  esperanzasModel: string[] = [];
  horas: any[] = [{
    hora_nombre: "0 H - 3 H",
    id: 1
  },{
    hora_nombre: "4 H - 10 H",
    id: 2
  },{
    hora_nombre: "11 H - 20 H",
    id: 3
  },{
    hora_nombre: "21 H - 50 H",
    id: 4
  },{
    hora_nombre: "51 H -  H",
    id: 5
  }];
  horasModel: string[] = [];

  constructor(private comprasService: ComprasService){}

  ngOnInit(){
    this.comprasService.getEstados().subscribe((res) => this.estados = res);
    this.comprasService.getMarcas().subscribe((res) => this.marcas = res);
    this.comprasService.getTamano().subscribe((res) => this.tamanos = res);
    this.comprasService.getSistemaArchivos().subscribe((res) => this.sistemaArchivos = res);
    this.comprasService.getDisponibilidad().subscribe((res: any) =>{
      this.disponibilidades = res.filter((producto: any) => producto.disponibilidad_nombre !== 'Vendido');
    });
    this.comprasService.getDiscosDuros().subscribe((res) =>{
      this.discosDuros = res;
      console.log(res);
    });
  }

}
