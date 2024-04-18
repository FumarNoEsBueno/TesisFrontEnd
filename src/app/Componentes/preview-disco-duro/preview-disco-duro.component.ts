import { Component, Input} from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-preview-disco-duro',
  standalone: true,
  imports: [
    CardModule,
    DialogModule,
    ImageModule
  ],
  templateUrl: './preview-disco-duro.component.html',
  styleUrl: './preview-disco-duro.component.css'
})


export class PreviewDiscoDuroComponent {

  @Input() nombre: any;

  visible = false;

  ngOnInit(){
  }

  wea(){
    this.visible = true;
  }

}
