import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DiscoDuro } from '../../Classes/discoDuro';

@Component({
  selector: 'app-preview-disco-duro',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    DialogModule,
    ImageModule
  ],
  templateUrl: './preview-disco-duro.component.html',
  styleUrl: './preview-disco-duro.component.css'
})


export class PreviewDiscoDuroComponent {

  @Input() discoDuro: any;

  @Output() agregarAlCarro = new EventEmitter<DiscoDuro>();


  visible = false;

  ngOnInit(){
  }

  anadirAlCarrito(){
    this.agregarAlCarro.emit(this.discoDuro);
  }

  mostrarDetalles(){
    this.visible = true;
  }

}
