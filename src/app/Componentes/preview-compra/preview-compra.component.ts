import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { DiscoDuro } from '../../Classes/discoDuro';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { StepperModule } from 'primeng/stepper';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-preview-compra',
  standalone: true,
  imports: [SidebarModule,
    DialogModule,
    ProgressSpinnerModule,
    StepperModule,
    ButtonModule,
  ],
  templateUrl: './preview-compra.component.html',
  styleUrl: './preview-compra.component.css'
})
export class PreviewCompraComponent {

  constructor(private router: Router){}

  @Input() abierto: any;
  @Input() discosDuros: DiscoDuro[] = [];

  @Output() cerrarCarrito = new EventEmitter<void>();
  @Output() discoDuroOutput = new EventEmitter<DiscoDuro[]>();

  finalizarCompraVisible = false;
  progresoCompra = 0;

  finalizarCompra(){
    this.finalizarCompraVisible = true;
    this.cerrarSidebar();
  }


  cerrarSidebar(){
    this.cerrarCarrito.emit();
  }

  eliminarCompra(id: number){
    this.discosDuros = this.discosDuros.filter((disco) => disco.id !== id);
    this.discoDuroOutput.emit(this.discosDuros);
  }

}
