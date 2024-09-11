import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {


  URL = "http://localhost:3000/projects"

  constructor(private http: HttpClient) {
  }
  getProjects(): Observable<Project[]> {
    const response = this.http.get<Project[]>(this.URL)
    return response
  }

  getProjectByTitle(title: string): Observable<Project[]> {
    const response = this.http.get<Project[]>(`${this.URL}?title=${title}`)
    return response
  }
}
