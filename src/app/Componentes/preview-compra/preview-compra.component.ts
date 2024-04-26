import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { DiscoDuro } from '../../Classes/discoDuro';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-preview-compra',
  standalone: true,
  imports: [SidebarModule,
    ButtonModule,
  ],
  templateUrl: './preview-compra.component.html',
  styleUrl: './preview-compra.component.css'
})
export class PreviewCompraComponent {

  @Input() abierto: any;
  @Input() discosDuros: DiscoDuro[] = [];

  @Output() cerrarCarrito = new EventEmitter<void>();
  @Output() discoDuroOutput = new EventEmitter<DiscoDuro[]>();

  cerrarSidebar(){
    this.cerrarCarrito.emit();
  }

  eliminarCompra(id: number){
    this.discosDuros = this.discosDuros.filter((disco) => disco.id !== id);
    this.discoDuroOutput.emit(this.discosDuros);
  }

}
