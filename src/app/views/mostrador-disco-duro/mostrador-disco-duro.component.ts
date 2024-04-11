import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-mostrador-disco-duro',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './mostrador-disco-duro.component.html',
  styleUrl: './mostrador-disco-duro.component.less'
})
export class MostradorDiscoDuroComponent {

}
