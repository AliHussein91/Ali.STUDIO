import { Injectable } from '@angular/core';
import { Experience } from '../interfaces/experience';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  URL= "http://localhost:3000/experiences";

  constructor(private http: HttpClient){
  }
  getExperiences(): Observable<Experience[]> {
    const response = this.http.get<Experience[]>(this.URL)
    return response
  }
}
