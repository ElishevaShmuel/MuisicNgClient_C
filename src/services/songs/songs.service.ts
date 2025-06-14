// services/music.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SongModule } from '../../models/song/song.module';
import e from 'express';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private baseUrl = environment.API_URL ;

  constructor(private http: HttpClient) {}

 async getFiles(): Promise<Observable<SongModule[]>> {
    return await this.http.get<SongModule[]>(`${this.baseUrl}/AudioFile/get`);
  }

  async getFilesByUserId(userId: number): Promise<Observable<SongModule[]>> {
    return await this.http.get<SongModule[]>(`${this.baseUrl}/AudioFile/getById`, {
      params: { userId: userId.toString() }
    });
  }

 async getDownloadUrl(fileName: string): Promise<Observable<{ url: string; }>> {
    return await this.http.get<{ url: string }>(`${this.baseUrl}/AudioFile/Download`, {
      params: { fileName }
    });
  }

  async downloadFile(fileName: string): Promise<Observable<Blob>> {
    return (await this.getDownloadUrl(fileName)).pipe(
      switchMap(response => 
        this.http.get(response.url, { responseType: 'blob' })
      )
    );
  }
}
