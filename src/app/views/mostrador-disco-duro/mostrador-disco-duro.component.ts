import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-mostrador-disco-duro',
  standalone: true,
  imports: [CardModule, ButtonModule, StyleClassModule],
  templateUrl: './mostrador-disco-duro.component.html',
  styleUrl: './mostrador-disco-duro.component.less'
})
export class MostradorDiscoDuroComponent {

}
