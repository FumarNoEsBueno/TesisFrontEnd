import { Routes } from '@angular/router';
import { MostradorDiscoDuroComponent } from './mostrador-disco-duro/mostrador-disco-duro.component';
import { HomePageComponent } from './home-page/home-page.component';

const routeCofig: Routes = [{
  path: '',
  component: HomePageComponent,
  title: 'MidTech: Discos duros'
},{
  path: 'disco-duro',
  component: MostradorDiscoDuroComponent,
  title: 'MidTech: Discos duros'
}];

export default routeCofig;
