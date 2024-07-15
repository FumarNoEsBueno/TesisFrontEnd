import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import {Router} from "@angular/router"
import { LoginServiceService } from '../Services/login-service.service';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SplitButtonModule, MenubarModule, ButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private loginService: LoginServiceService,private router: Router) { }

  @Output() abrirCarritoOutput = new EventEmitter<void>();
  opciones = [
    {
      label: 'Cerrar sesión',
      command: () => {
        this.cerrarSesion();
      }
    },
  ]
  items = [
      {label: 'Inicio', icon: 'pi pi-home', routerLink: ['./']},
      {label: 'Discos duros',  routerLink: ['./disco-duro']},
      {label: 'Memorias ram',  routerLink: ['./ram']},
      {label: 'Perifericos',  routerLink: ['./periferico']},
      {label: 'Cables',  routerLink: ['./cables']},
      {label: 'Recepción de residuos',  routerLink: ['./recepcion']},
    ];

    aLogin(){
      this.loginService.checkLogin().subscribe({
        next: (res: any) => {
            this.router.navigate(['/profile/historial'])
        },
        error: (err: any) => {
          this.router.navigate(['/login'])
        }
      });
    }

    cerrarSesion(){
      this.loginService.cerrarSesion().subscribe({
        next: (res: any) => {
          this.router.navigate(['/'])
        },
        error: (err: any) => {
        }
      });
    }

    abrirCarrito(){
      this.abrirCarritoOutput.emit();
    }
}
