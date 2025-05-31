
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModule } from '../../models/user/user.module';
import { environment } from '../../environments/environments';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl= environment.API_URL;;


  async getUsers(): Promise<Observable<UserModule[]>> {
    if (typeof window !== 'undefined') {

    const token = localStorage.getItem('adminToken');    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("uuuuuuuuuuu");
        return await this.http.get<UserModule[]>(`${this.apiUrl}/User/users`, { headers });
    }
    return new Observable<UserModule[]>(subscriber => {
      subscriber.error(new Error('Not in a browser environment'));
    });
  }



  async deleteUser(user: UserModule): Promise<Observable<any>> {
    if (typeof window !== 'undefined') {

    const token = localStorage.getItem('adminToken');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return await this.http.delete(`${this.apiUrl}/User/delete`,{headers, body: user});
    }
    return new Observable<any>(subscriber => {
      subscriber.error(new Error('Not in a browser environment'));
    });
  }
}
