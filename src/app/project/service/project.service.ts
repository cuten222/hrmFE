import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private Url = 'http://192.168.4.172:8080/project';
  constructor(private http: HttpClient) { }

  gets(): Observable<any>{
    return this.http.get<any>(`${this.Url}/list`)
  }

  getLimit(start:number, pageSize:number): Observable<any>{
    return this.http.get<any>(`${this.Url}/listLimit?start=${start}&pageSize=${pageSize}`);
  }

  get(projectID: number): Observable<any>{
    return this.http.get<any>(`${this.Url}/get/${projectID}`);
  }

  create(project: Object): Observable<Object>{
    return this.http.post(`${this.Url}/create`, project);
  }

  /** Update Employees */
  update (projectID: number, value: any): Observable<Object>{
    return this.http.put(`${this.Url}/update/${projectID}`, value);
  }

  /** Delete Employees by id from the server */
  delete (projectID: number): Observable<any>{
    return this.http.put(`${this.Url}/delete/${projectID}`, null);
  }
}

