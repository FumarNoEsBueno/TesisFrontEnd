import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-mostrador-direccion',
  standalone: true,
  imports: [RadioButtonModule,
  FormsModule],
  templateUrl: './mostrador-direccion.component.html',
  styleUrl: './mostrador-direccion.component.css'
})
export class MostradorDireccionComponent {

  @Input() direccion: any;
  @Input() selectedDireccion: any;

  @Output() changeSelectedDireccion = new EventEmitter<any>();

  onSelectedDireccionChange(){
    this.changeSelectedDireccion.emit(this.selectedDireccion);
  }
}
