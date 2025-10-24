import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface UserItem {
  username: string;
  juris: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private apiUrl = 'https://www.sathyasaiodisha.org/api'; // FastAPI base URL
  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post<any>(`${this.apiUrl}/login`, formData)
      .subscribe(response => {
        sessionStorage.setItem(this.tokenKey, response.access_token);
        this.router.navigate(['/admin']);
      });
  }

  logout() {
    sessionStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  getToken() {
    return sessionStorage.getItem(this.tokenKey);
  }

  getJurisdiction(): string | null {
    const token = this.getToken();
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.juris;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getMe(): Observable<UserItem> {
    return this.http.get<UserItem>(`${this.apiUrl}/users/me`);
  }
}
