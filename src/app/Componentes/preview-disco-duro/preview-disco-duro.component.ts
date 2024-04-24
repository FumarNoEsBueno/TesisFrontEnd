import { Component, Input} from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

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

  @Input() nombre: any;
  @Input() imagenUrl: any;
  @Input() crystaldisk: any;
  @Input() esperanzaVida: any;
  @Input() horas: any;
  @Input() memoria: any;
  @Input() precio: any;
  @Input() marca: any;
  @Input() sistemaArchivos: any;
  @Input() tamano: any;

  visible = false;

  ngOnInit(){
  }

  mostrarDetalles(){
    this.visible = true;
  }

}
