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

@Component({
  selector: 'app-preview-compra',
  standalone: true,
  imports: [SidebarModule,
    BadgeModule,
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
  templateUrl: './preview-compra.component.html',
  styleUrl: './preview-compra.component.css'
})
export class PreviewCompraComponent {

  constructor(private loginService: LoginServiceService,
              private router: Router,
              private compraService: ComprasService){}

  @Input() abierto: any;
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

  continuarCompra(){
    this.loginService.checkLogin().subscribe({
      next: () => {
          this.progresoCompra = 0;
          this.pasoCompra = 0;
          this.finalizarCompraVisible = true;
      },
      error: () => {
        this.router.navigate(['/login'])
    }
    });
    this.cerrarSidebar();
  }

  finalizarCompra(){
    this.progresoCompra = 1;
    this.compraService.comprarObjetos(this.productos, null, null, null).subscribe({
      next: (res: any) => {
        console.log(res);
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
}
