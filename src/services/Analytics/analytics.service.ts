import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private http = inject(HttpClient);
  private apiUrl = 'your-api-url'; // Replace with your API URL

  getStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/stats`);
  }

  getChartData(chartType: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/charts/${chartType}`);
  }
}
