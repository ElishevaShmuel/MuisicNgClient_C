
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModule } from '../../models/user/user.module';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7264/api';


  async getUsers(): Promise<Observable<UserModule[]>> {
    const token = localStorage.getItem('adminToken');
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("uuuuuuuuuuu");

    return await this.http.get<UserModule[]>(`${this.apiUrl}/User/users`, { headers });

  }



  async deleteUser(user: UserModule): Promise<Observable<any>> {
    const token = localStorage.getItem('adminToken');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return await this.http.delete(`${this.apiUrl}/User/delete`,{headers, body: user});
  }
}
