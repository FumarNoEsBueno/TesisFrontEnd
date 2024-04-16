import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-mostrador-disco-duro',
  standalone: true,
  imports: [CardModule, AccordionModule],
  templateUrl: './mostrador-disco-duro.component.html',
  styleUrl: './mostrador-disco-duro.component.css'
})
export class MostradorDiscoDuroComponent {

}
