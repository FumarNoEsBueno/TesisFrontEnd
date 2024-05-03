import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @Output() abrirCarritoOutput = new EventEmitter<void>();

  items = [
      {label: 'Inicio', icon: 'pi pi-home', routerLink: ['./']},
      {label: 'Discos duros',  routerLink: ['./disco-duro']},
      {label: 'Memorias ram',  routerLink: ['./ram']},
      {label: 'Perifericos',  routerLink: ['./periferico']},
      {label: 'Seguimiento de compra',  routerLink: ['./seguimiento']},
    ];

    abrirCarrito(){
      this.abrirCarritoOutput.emit();
    }
}
