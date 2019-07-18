import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getExperience(): Observable<Place[]> {
    return this.http.get<Place[]>('/assets/data/experience.json');
  }

  getEducation(): Observable<Place[]> {
    return this.http.get<Place[]>('/assets/data/education.json');
  }

  getSkills(): Observable<any> {
    return this.http.get('/assets/data/skills.json');
  }
}
