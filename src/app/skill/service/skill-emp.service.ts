import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillEmpService {
  private Url = 'http://192.168.4.172:8080/skill_emp';
  constructor(private http: HttpClient) { }

  get(skillEmpID: number): Observable<any>{
    return this.http.get<any>(`${this.Url}/get/${skillEmpID}`);
  }

  create(skillEmp: Object): Observable<Object>{
    return this.http.post(`${this.Url}/create`, skillEmp);
  }

  delete (skillEmpID: number): Observable<any>{
    return this.http.put(`${this.Url}/delete/${skillEmpID}`, null);
  }
}
