import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private apiUrl = 'https://localhost:7264/api'; 

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

   async login(credentials: { email: string; password: string }): Promise<Observable<any>> {
    console.log('Login ');

    return await this.http.post(`${this.apiUrl}/user/admin/login`, credentials).pipe(
      tap((response: any) => {
        console.log('Login response:', response); 
        
        localStorage.setItem('adminToken', response.token);
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  logout() {
    localStorage.removeItem('adminToken');
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('adminToken');
  }
}
