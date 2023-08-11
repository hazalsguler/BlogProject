import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  
  register(username: string, password: string) {
    const user = { username, password };
    return this.http.post('/api/register', user);
  }
}
