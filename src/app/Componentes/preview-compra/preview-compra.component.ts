import { Component, Input, EventEmitter, Output } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { StepperModule } from 'primeng/stepper';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MostradorCompraComponent } from '../mostrador-compra/mostrador-compra.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ComprasService } from '../../Services/compras.service';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';
import { Producto } from '../../Classes/Producto';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { LoginServiceService } from '../../Services/login-service.service';
import { Router } from '@angular/router';
import { MostradorDireccionComponent } from '../mostrador-direccion/mostrador-direccion.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-preview-compra',
  standalone: true,
  imports: [SidebarModule,
    BadgeModule,
    MostradorDireccionComponent,
    InputTextModule,
    DropdownModule,
    TooltipModule,
    RadioButtonModule,
    FormsModule,
    CheckboxModule,
    DialogModule,
    ScrollPanelModule,
    ProgressSpinnerModule,
    MostradorCompraComponent,
    StepperModule,
    ButtonModule,
  ],
  providers: [MessageService],
  templateUrl: './preview-compra.component.html',
  styleUrl: './preview-compra.component.css'
})
export class PreviewCompraComponent {

  constructor(private loginService: LoginServiceService,
              private router: Router,
              private messageService: MessageService,
              private compraService: ComprasService){}

  @Input() abierto: any;
  @Input() mobile: any;
  @Input() costoTotal: any;
  @Input() productos: Producto[] = [];

  @Output() cerrarCarrito = new EventEmitter<void>();
  @Output() discoDuroOutput = new EventEmitter<Producto[]>();
  @Output() recargarPagina = new EventEmitter<void>();

  ciudades: any[] = ["ciudad1",
    "ciudad",
    "ciudad1"];
  selectedCiudad: any;
  calleValue: string = "";
  selectedPago: any = "transferencia";
  selectedRetiro: any = 'retiro';
  finalizarCompraVisible = false;
  value: any;
  progresoCompra = 0;
  pasoCompra = 0;
  detallesCompra: any;
  direcciones: any[] = [];
  selectedDireccion: any;
  agregando: boolean = false;

  listaCiudades: any;
  listaRegiones: any;
  listaProvincia: any;

  nuevaDireccionCiudad: any;
  nuevaDireccionRegion: any;
  nuevaDireccionProvincia: any;
  nuevaDireccionCalle: any;

  ngOnInit(){
    this.getDirecciones();
    this.getRegiones();
  }

  updateDireccion(event: any){
    this.selectedDireccion = event;
  }

  continuarCompra(){
    this.loginService.checkLogin().subscribe({
      next: () => {
          this.progresoCompra = 0;
          this.pasoCompra = 0;
          this.finalizarCompraVisible = true;
          this.getDirecciones();
      },
      error: () => {
          this.router.navigate(['/login'])
    }
    });
    this.cerrarSidebar();
  }

  getDirecciones(){
    this.loginService.getDirecciones().subscribe({
      next: (res: any) => {
        this.direcciones = res;
      },
      error: () => {
        this.router.navigate(['/login'])
    }
    });
  }

  finalizarCompra(){
    this.progresoCompra = 1;
    this.compraService.comprarObjetos(
      this.productos,
      this.selectedPago,
      this.selectedRetiro,
      this.selectedDireccion,
      this.costoTotal)
      .subscribe({
      next: (res: any) => {
        this.progresoCompra = 2;
        this.productos = [];
        this.discoDuroOutput.emit([]);
        this.recargarPagina.emit();
        this.detallesCompra = res;
      },
      error: (err: any) => {
        this.progresoCompra = 3;
      }
    });
  }

  cerrarSidebar(){
    this.cerrarCarrito.emit();
  }

  eliminarCompra(producto: Producto){
    this.productos = this.productos.filter((prod) => ((prod.id !== producto.id) || (prod.tipoProducto !== producto.tipoProducto)));
    this.discoDuroOutput.emit(this.productos);
  }

  filtroPago(event: any){
  }

  agregarDireccion(){
    this.loginService.createDireccion(this.nuevaDireccionCiudad.id,
                                      this.nuevaDireccionCalle).subscribe({
      next: (res) => {
        this.nuevaDireccionCalle = null;
        this.nuevaDireccionRegion = null;
        this.listaProvincia = null;
        this.nuevaDireccionProvincia = null;
        this.listaCiudades = null;
        this.nuevaDireccionCiudad = null;
        this.agregando = false;
        this.getDirecciones();
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: 'Calle añadida existosamente' });
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'A ocurrido un problema insesperado' });
      },
    });
  }

  getProvincias(){
    this.listaProvincia = null;
    this.nuevaDireccionProvincia = null;
    this.listaCiudades = null;
    this.nuevaDireccionCiudad = null;
    this.loginService.getProvinciasPorRegion(this.nuevaDireccionRegion.id).subscribe({
      next: (res: any) => {
        this.listaProvincia = res.map((r: any) => {
          return {
            name: r.provincia_nombre,
            id: r.id
          }
        });
      }
    });
  }

  getCiudades(){
    this.listaCiudades = null;
    this.nuevaDireccionCiudad = null;
    this.loginService.getCiudadesPorProvincia(this.nuevaDireccionProvincia.id).subscribe({
      next: (res: any) => {
        this.listaCiudades = res.map((r: any) => {
          return {
            name: r.ciudad_nombre,
            id: r.id
          }
        });
      }
    });
  }

  getRegiones(){
    this.loginService.getRegiones().subscribe({
      next: (res: any) => {
        this.listaRegiones = res.map((r: any) => {
          return {
            name: r.region_nombre,
            id: r.id
          }
        });
      }
    });
  }
}
