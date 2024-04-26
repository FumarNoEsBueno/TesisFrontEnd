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
      {label: 'Inicio', icon: 'pi pi-home', routerLink: ['/']},
      {label: 'Discos duros', icon: 'pi pi-list', routerLink: ['/disco-duro']},
      {label: 'Memorias ram', icon: 'pi pi-check', routerLink: ['/ram']},
      {label: 'Perifericos', icon: 'pi pi-list', routerLink: ['/periferico']},
    ];

    abrirCarrito(){
      this.abrirCarritoOutput.emit();
    }
}
