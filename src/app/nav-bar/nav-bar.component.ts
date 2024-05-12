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

  @Input() email: any;
  @Input() password: any;
  @Output() abrirCarritoOutput = new EventEmitter<void>();

  items = [
      {label: 'Inicio', icon: 'pi pi-home', routerLink: ['./']},
      {label: 'Discos duros',  routerLink: ['./disco-duro']},
      {label: 'Memorias ram',  routerLink: ['./ram']},
      {label: 'Perifericos',  routerLink: ['./periferico']},
      {label: 'Seguimiento de compra',  routerLink: ['./seguimiento']},
    ];

    aLogin(){

      let credentials = {
        email: this.email,
        password: this.password
      };

      this.loginService.checkLogin(credentials).subscribe((res: any) => {
        if(res){
          this.router.navigate(['/profile'])
        }else{
          this.router.navigate(['/login'])
        }
      });
    }

    abrirCarrito(){
      this.abrirCarritoOutput.emit();
    }
}
