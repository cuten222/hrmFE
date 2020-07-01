import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private Url = 'http://192.168.4.172:8080/skill';
  constructor(private http: HttpClient) { }

  gets(): Observable<any>{
    return this.http.get<any>(`${this.Url}/list`)
  }

  getLimit(start:number, pageSize:number): Observable<any>{
    return this.http.get<any>(`${this.Url}/listLimit?start=${start}&pageSize=${pageSize}`);
  }

  get(skillID: number): Observable<any>{
    return this.http.get<any>(`${this.Url}/get/${skillID}`);
  }

  create(skill: Object): Observable<Object>{
    return this.http.post(`${this.Url}/create`, skill);
  }

  update (skillID: number, value: any): Observable<Object>{
    return this.http.put(`${this.Url}/update/${skillID}`, value);
  }

  delete (skillID: number): Observable<any>{
    return this.http.put(`${this.Url}/delete/${skillID}`, null);
  }
}
