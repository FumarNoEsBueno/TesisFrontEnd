import { Component, EventEmitter, Output } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  imports: [ImageModule],
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @Output() agregarAlCarroOutput = new EventEmitter<void>();
}
