import { Component, EventEmitter, Output } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { Router } from '@angular/router';
import { MostradorHistorialComponent } from '../Componentes/mostrador-historial/mostrador-historial.component';
import { ComprasService } from '../Services/compras.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CardModule,
    MostradorHistorialComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private loginService: LoginServiceService,
              private comprasService: ComprasService,
              private router: Router) { }

  @Output() requestLogin = new EventEmitter<void>();

  listaCompras: any;
  estado = 0;

  wea(){
    console.log("awadkjsl");
  }

  ngOnInit(){
    this.loginService.checkLogin().subscribe({
      next: () => {
        this.router.navigate(['/profile'])
      },
      error: () => {
        this.router.navigate(['/login'])
      }
    });//TODO: ???
    this.comprasService.getHistorialCompras().subscribe({
      next: (res: any) => {
        this.listaCompras = res;
      },
    });
  }
}
