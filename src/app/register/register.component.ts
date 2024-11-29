import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';
import { LoginServiceService } from '../Services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MessagesModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CardModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private loginService: LoginServiceService,
              private router: Router) { }

  name = '';
  email = '';
  password = '';
  number = '';
  passwordRepeat = '';

  messages: Message[] = [];

  ngOnInit(){
  }

  register(){
      let credentials = {
        name: this.name,
        email: this.email,
        password: this.password,
        number: this.number
      };

      this.loginService.register(credentials).subscribe({
        next: (res: any) => {
           this.messages = [{ severity: 'success', detail: 'Cuenta registrada correctamente' }];
           this.name = "";
           this.email = "";
           this.number = "";
           this.password = "";
           this.passwordRepeat = "";
        },
        error: (err: any) => {
           this.messages = [{ severity: 'error', detail: 'Error inesperado' }];
           this.password = "";
           this.passwordRepeat = "";
        }
      });
  }

}
