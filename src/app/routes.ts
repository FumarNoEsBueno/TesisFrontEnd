import { Routes } from '@angular/router';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { MostradorDiscoDuroComponent } from './views/mostrador-disco-duro/mostrador-disco-duro.component';

const routeConfig: Routes = [{
  path: '',
  component: NavBarComponent,
  title: 'Home'
},{
  path: 'discos-duros',
  component: MostradorDiscoDuroComponent,
  title: 'Discos duros'
}];

export default routeConfig;
