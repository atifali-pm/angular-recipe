import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;

  constructor(private http: HttpClient) {
  }

  createUser(email: string, password: string) {
    const authUser: Auth = { email, password };
    console.log(authUser);
    this.http.post('http://localhost:3001/api/user/signup', authUser)
      .subscribe(response => {
        console.log(response);
      });
  }

  login(email: string, password: string) {
    const authUser: Auth = { email, password };
    console.log(authUser);
    this.http.post<{ message: string, token: string }>('http://localhost:3001/api/user/login', authUser)
      .subscribe(response => {
        console.log(response);
        this.token = response.token;
      });
  }

  getToken() {
    return this.token;
  }
}
