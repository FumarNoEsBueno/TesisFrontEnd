import { Component, EventEmitter, Output } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { Router, RouterOutlet } from '@angular/router';
import { MostradorHistorialComponent } from '../Componentes/mostrador-historial/mostrador-historial.component';
import { CardModule } from 'primeng/card';
import { MostradorDireccionComponent } from '../Componentes/mostrador-direccion/mostrador-direccion.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CardModule,
    ToastModule,
    RouterOutlet,
    MostradorDireccionComponent,
    MostradorHistorialComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [MessageService]
})
export class ProfileComponent {

  constructor(private loginService: LoginServiceService,
              private messageService: MessageService,
              private router: Router) { }

  @Output() requestLogin = new EventEmitter<void>();


  ngOnInit(){
    this.loginService.checkLogin().subscribe({
      error: () => {
        this.router.navigate(['/login'])
      }
    });
  }


  aHistorial(){
        this.router.navigate(['/profile/historial'])
  }

  aRecepcion(){
        this.router.navigate(['/profile/recepcion'])
  }

  aDirecciones(){
        this.router.navigate(['/profile/direcciones'])
  }

}
