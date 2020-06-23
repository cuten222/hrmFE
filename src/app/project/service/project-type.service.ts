import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectTypeService {
  private Url = 'http://192.168.4.172:8080/projectType';
  constructor(private http: HttpClient) { }

  gets(): Observable<any>{
    return this.http.get<any>(`${this.Url}/list`)
  }

}
