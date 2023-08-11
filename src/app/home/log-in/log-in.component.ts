import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  username: string = '';
  password:string = '';
  constructor(private authService:AuthServiceService){}

  onLogin() {
   
    if (this.username === 'admin' && this.password === 'password') {
      this.authService.login(); 
    } else {
      alert('Kullanıcı adı veya şifre yanlış!');
    }
  }

}
