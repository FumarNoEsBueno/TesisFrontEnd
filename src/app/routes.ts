import { Routes } from '@angular/router';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { MostradorDiscoDuroComponent } from './views/mostrador-disco-duro/mostrador-disco-duro.component';

const routeConfig: Routes = [{
  path: '',
  component: NavBarComponent,
  title: 'Home'
},{
  path: 'testeo',
  component: MostradorDiscoDuroComponent,
  title: 'testeo'
},{
  path: 'perifericos',
  component: MostradorDiscoDuroComponent,
  title: 'Perifericos'
},{
  path: 'ram',
  component: MostradorDiscoDuroComponent,
  title: 'Ram'
},{
  path: 'discos-duros',
  component: MostradorDiscoDuroComponent,
  title: 'Discos duros'
}];

export default routeConfig;
