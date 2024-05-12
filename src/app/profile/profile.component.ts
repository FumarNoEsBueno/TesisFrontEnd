import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  @Output() requestLogin = new EventEmitter<void>();

  ngOnInit(){
    this.requestLogin.emit();
  }
}
