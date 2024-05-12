import { Component, EventEmitter, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, FormsModule, FloatLabelModule, CardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: any;
  password: any;
  @Output() actualizarLoginData = new EventEmitter<any>();

  login(){
      let credentials = {
        email: this.email,
        password: this.password
      };

      this.actualizarLoginData.emit(credentials);
  }
}
