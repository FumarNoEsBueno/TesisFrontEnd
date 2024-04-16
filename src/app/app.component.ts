import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardModule, AccordionModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TesisFrontEnd3';
}
