import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly isLoggedInKey = 'isLoggedIn';
  isLoggedIn = false;
  constructor(private router:Router) {
    this.isLoggedIn = sessionStorage.getItem(this.isLoggedInKey) === 'true';
   }

  
  login() {
    // Kullanıcı giriş işlemleri yapılır ve isLoggedIn true yapılır
    this.isLoggedIn = true;
    
    sessionStorage.setItem(this.isLoggedInKey, 'true');
    this.router.navigate(['/home']); // Kullanıcı giriş yaptığında ana sayfaya yönlendirme yapar
  }



  
  logout() {
    // Kullanıcı çıkış işlemleri yapılır ve isLoggedIn false yapılır
    this.isLoggedIn = false;
    this.router.navigate(['']); // Kullanıcı çıkış yaptığında login sayfasına yönlendirme yapar
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }
}
