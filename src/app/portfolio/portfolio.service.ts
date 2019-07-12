import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  title: string;
  loaded?: boolean;
  fail?: boolean;
  light?: boolean;
  full?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('/assets/data/projects.json');
  }
}
