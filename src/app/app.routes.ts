import { Routes } from '@angular/router';
import { MostradorDiscoDuroComponent } from './mostrador-disco-duro/mostrador-disco-duro.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [{
  path: '',
  component: HomePageComponent,
  title: 'MidTech: Low cost'
},{
  path: 'disco-duro',
  component: MostradorDiscoDuroComponent,
  title: 'MidTech: Discos duros'
}];
