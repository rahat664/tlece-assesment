import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginApi = 'https://dummyjson.com/auth/login'
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post(this.loginApi, {username, password, expiresInMins: 30});
  }
}
