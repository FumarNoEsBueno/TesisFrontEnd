import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import {Router} from "@angular/router"
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private loginService: LoginServiceService,private router: Router) { }

  @Output() abrirCarritoOutput = new EventEmitter<void>();

  items = [
      {label: 'Inicio', icon: 'pi pi-home', routerLink: ['./']},
      {label: 'Discos duros',  routerLink: ['./disco-duro']},
      {label: 'Memorias ram',  routerLink: ['./ram']},
      {label: 'Perifericos',  routerLink: ['./periferico']},
      //{label: 'Seguimiento de compra',  routerLink: ['./seguimiento']},
    ];

    aLogin(){
      this.loginService.checkLogin().subscribe({
        next: (res: any) => {
            this.router.navigate(['/profile'])
        },
        error: (err: any) => {
          this.router.navigate(['/login'])
        }
      });
    }

    abrirCarrito(){
      this.abrirCarritoOutput.emit();
    }
}
