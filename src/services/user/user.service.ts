
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModule } from '../../models/user/user.module';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7264/api'; 

  async getUsers(): Promise<Observable<UserModule[]>> {
    return await this.http.get<UserModule[]>(`${this.apiUrl}/user/users`);
    
  }

 

  async deleteUser(userId: number): Promise<Observable<any>> {
    return await this.http.delete(`${this.apiUrl}/user/admin/${userId}`);
  }
}
