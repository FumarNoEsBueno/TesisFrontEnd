import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PreviewCompraComponent } from './Componentes/preview-compra/preview-compra.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PreviewCompraComponent,
    HttpClientModule,
    NavBarComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TesisFrontEnd3';

  subscribeToChildEvent(componentRef: any){
    componentRef.agregarAlCarroOutput.subscribe((res: any) => {
      console.log(res);
    });
  }
}
