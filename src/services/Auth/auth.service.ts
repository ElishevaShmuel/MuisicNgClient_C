import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { env } from 'process';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private apiUrl = environment.API_URL;

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  async login(credentials: { email: string; password: string }): Promise<Observable<any>> {
    console.log('Login ');

    return await this.http.post(`${this.apiUrl}/user/admin/login`, credentials).pipe(
      tap((response: any) => {
        console.log('Login response:', response);
        if (typeof window !== 'undefined') {
          localStorage.setItem('adminToken', response.token);
        }
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  logout() {
    if (typeof window !== 'undefined') {

      localStorage.removeItem('adminToken');
    }
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
  if (typeof window === 'undefined') {
      return false; // Not in a browser environment
    }
    return !!localStorage.getItem('adminToken');
  }
}
