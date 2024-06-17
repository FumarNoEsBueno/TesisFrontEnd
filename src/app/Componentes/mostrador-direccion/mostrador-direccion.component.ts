import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-mostrador-direccion',
  standalone: true,
  imports: [RadioButtonModule,
    ButtonModule,
    FormsModule],
  templateUrl: './mostrador-direccion.component.html',
  styleUrl: './mostrador-direccion.component.css'
})
export class MostradorDireccionComponent {

  @Input() direccion: any;
  @Input() seleccionable: boolean = true;
  @Input() selectedDireccion: any;

  @Output() changeSelectedDireccion = new EventEmitter<any>();
  @Output() onEliminarClick = new EventEmitter<any>();

  eliminar(){
    this.onEliminarClick.emit(this.direccion);
  }

  onSelectedDireccionChange(){
    this.changeSelectedDireccion.emit(this.selectedDireccion);
  }
}
