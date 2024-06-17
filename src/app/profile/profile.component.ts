import { Component, EventEmitter, Output } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';
import { Router } from '@angular/router';
import { MostradorHistorialComponent } from '../Componentes/mostrador-historial/mostrador-historial.component';
import { ComprasService } from '../Services/compras.service';
import { CardModule } from 'primeng/card';
import { MostradorDireccionComponent } from '../Componentes/mostrador-direccion/mostrador-direccion.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CardModule,
    ToastModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    MostradorDireccionComponent,
    MostradorHistorialComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [MessageService]
})
export class ProfileComponent {

  constructor(private loginService: LoginServiceService,
              private messageService: MessageService,
              private comprasService: ComprasService,
              private router: Router) { }

  @Output() requestLogin = new EventEmitter<void>();

  listaCompras: any;
  estado = 0;
  agregando: boolean = false;
  direcciones: any;

  listaCiudades: any;
  listaRegiones: any;
  listaProvincia: any;

  nuevaDireccionCiudad: any;
  nuevaDireccionRegion: any;
  nuevaDireccionProvincia: any;
  nuevaDireccionCalle: any;

  ngOnInit(){
    this.getDirecciones();
    this.getRegiones();
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
        this.listaCompras = res.data;
      },
    });
  }

  agregarDireccion(){
    this.loginService.createDireccion(this.nuevaDireccionCiudad.id,
                                      this.nuevaDireccionCalle).subscribe({
      next: (res) => {
        this.nuevaDireccionCalle = null;
        this.nuevaDireccionRegion = null;
        this.listaProvincia = null;
        this.nuevaDireccionProvincia = null;
        this.listaCiudades = null;
        this.nuevaDireccionCiudad = null;
        this.agregando = false;
        this.getDirecciones();
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: 'Calle añadida existosamente' });
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'A ocurrido un problema insesperado' });
      },
    });
  }

  eliminarDireccion(direccion: any){
    this.loginService.deleteDireccion(direccion.id).subscribe({
      next: (res: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Exito',
          detail: 'Calle eliminada exitosamete' });
        this.getDirecciones();
      }
    });
  }

  getRegiones(){
    this.loginService.getRegiones().subscribe({
      next: (res: any) => {
        this.listaRegiones = res.map((r: any) => {
          return {
            name: r.region_nombre,
            id: r.id
          }
        });
      }
    });
  }

  getProvincias(){
    this.listaProvincia = null;
    this.nuevaDireccionProvincia = null;
    this.listaCiudades = null;
    this.nuevaDireccionCiudad = null;
    this.loginService.getProvinciasPorRegion(this.nuevaDireccionRegion.id).subscribe({
      next: (res: any) => {
        this.listaProvincia = res.map((r: any) => {
          return {
            name: r.provincia_nombre,
            id: r.id
          }
        });
      }
    });
  }

  getCiudades(){
    this.listaCiudades = null;
    this.nuevaDireccionCiudad = null;
    this.loginService.getCiudadesPorProvincia(this.nuevaDireccionProvincia.id).subscribe({
      next: (res: any) => {
        this.listaCiudades = res.map((r: any) => {
          return {
            name: r.ciudad_nombre,
            id: r.id
          }
        });
      }
    });
  }

  getDirecciones(){
    this.loginService.getDirecciones().subscribe({
      next: (res: any) => {
        this.direcciones = res;
      },
      error: () => {
        this.router.navigate(['/login'])
    }
    });
  }
}
