import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Exhibition {
  id?: string;
  title: string;
  date: string;
  venue: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {
  private apiUrl = 'http://localhost:5000/exhibitions';

  constructor(private http: HttpClient) {}

  getExhibitions(): Observable<Exhibition[]> {
    return this.http.get<Exhibition[]>(this.apiUrl);
  }

  addExhibition(exhibition: Exhibition): Observable<Exhibition> {
    return this.http.post<Exhibition>(this.apiUrl, exhibition);
  }

  updateExhibition(id: string, exhibition: Exhibition): Observable<Exhibition> {
    return this.http.put<Exhibition>(`${this.apiUrl}/${id}`, exhibition);
  }

  deleteExhibition(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
