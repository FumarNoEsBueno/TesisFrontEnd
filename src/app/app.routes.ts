import { Routes } from '@angular/router';
import { MostradorDiscoDuroComponent } from './mostrador-disco-duro/mostrador-disco-duro.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MostradorRamComponent } from './mostrador-ram/mostrador-ram.component';
import { MostradorPerifericoComponent } from './mostrador-periferico/mostrador-periferico.component';
import { MostradorSeguimientoComponent } from './mostrador-seguimiento/mostrador-seguimiento.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import { RecepcionResiduosComponent } from './recepcion-residuos/recepcion-residuos.component';
import { HistorialComprasComponent } from './profile/historial-compras/historial-compras.component';
import { HistorialRecepcionComponent } from './profile/historial-recepcion/historial-recepcion.component';
import { GestionPerfilComponent } from './profile/gestion-perfil/gestion-perfil.component';
import { MostradorCablesComponent } from './mostrador-cables/mostrador-cables.component';

export const routes: Routes = [{
  path: '',
  component: HomePageComponent,
  title: 'BioBío Reciclajes'
},{
  path: 'ram',
  component: MostradorRamComponent,
  title: 'BioBío Reciclajes: Rams'
},{
  path: 'seguimiento',
  component: MostradorSeguimientoComponent,
  title: 'BioBío Reciclajes: seguimiento'
},{
  path: 'periferico',
  component: MostradorPerifericoComponent,
  title: 'BioBío Reciclajes: Perifericos'
},{
  path: 'disco-duro',
  component: MostradorDiscoDuroComponent,
  title: 'BioBío Reciclajes: Discos duros'
},{
  path: 'login',
  component: LoginComponent,
  title: 'BioBío Reciclajes: login'
},{
  path: 'profile',
  component: ProfileComponent,
  title: 'BioBío Reciclajes: perfil',
  children: [
    {
      path: 'historial',
      title: 'BioBío Reciclajes: historial compras',
      component: HistorialComprasComponent,  // child route component that the router renders
    },
    {
      path: 'recepcion',
      title: 'BioBío Reciclajes: historial recepcion',
      component: HistorialRecepcionComponent,  // child route component that the router renders
    },
    {
      path: 'direcciones',
      title: 'BioBío Reciclajes: gestion de perfil',
      component: GestionPerfilComponent,  // another child route component that the router renders
    },
  ],
},{
  path: 'cables',
  component: MostradorCablesComponent,
  title: 'BioBío Reciclajes: cables'
},{
  path: 'recepcion',
  component: RecepcionResiduosComponent,
  title: 'BioBío Reciclajes: recepción'
},{
  path: 'register',
  component: RegisterComponent,
  title: 'BioBío Reciclajes: register'
},{
  path: 'recover',
  component: RecoverComponent,
  title: 'BioBío Reciclajes: recover'
},
];
