import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { ComprasService } from '../Services/compras.service';
import { LoginServiceService } from '../Services/login-service.service';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-recepcion-residuos',
  standalone: true,
  providers: [MessageService],
  imports: [FormsModule,
    ToastModule,
    DropdownModule,
    CardModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule],
    templateUrl: './recepcion-residuos.component.html',
  styleUrl: './recepcion-residuos.component.css'
})
export class RecepcionResiduosComponent {

  pesoAproximado: any;
  volumenAproximado: any;
  descripcion: any;
  metodoSeleccionado: any;
  metodos: any;

  constructor(private loginService: LoginServiceService,
              private router: Router,
              private messageService: MessageService,
              private compraService: ComprasService){}

  ngOnInit(){
    this.loginService.checkLogin().subscribe({
      next: () => {
        this.getMetodoDespacho();
      },
      error: () => {
        this.router.navigate(['/login'])
    }
    });
  }

  getMetodoDespacho(){
    this.compraService.getMetodoDespacho().subscribe({
      next: (res: any) => {
        this.metodos = res;
        this.metodos = this.metodos.filter((r: any) => r.metodo_despacho_slug != "despacho")
      },
      error: () => {
    }
    });
  }

  crearSolicitud(){

    let body = {
      volumen: this.volumenAproximado,
      peso: this.pesoAproximado,
      descripcion: this.descripcion,
      metodoId: this.metodoSeleccionado.id
    }

    this.compraService.createSolicitud(body).subscribe({
      next: (res) =>{

          this.volumenAproximado = "";
          this.pesoAproximado = "";
          this.descripcion = "";
          this.metodoSeleccionado = null;

        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: 'Solicitud registrada correcctamente' });
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al registrar la solicitud' });
      }
    })
  }
}
