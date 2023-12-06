import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataTypes } from './home.enum';

export interface Place {
  role: string;
  company: string;
  location: string;
  from_date: string;
  to_date: string;
  duties: string[];
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getData(type: DataTypes): Observable<any> {
    return this.http.get<any>(`/assets/data/${type}.json`);
  }
}
