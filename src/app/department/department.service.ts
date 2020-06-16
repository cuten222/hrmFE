import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private Url = 'http://192.168.4.172:8080/dept';
  constructor(private http: HttpClient) { }

  getDepts(request): Observable<any>{
    const params = request;
    return this.http.get<any>(`${this.Url}/list`, {params});
  }

  /** GET Department by id from the server */
  getDept(deptID: number): Observable<any>{
    return this.http.get<any>(`${this.Url}/get/${deptID}`);
  }

  /** Create Department */
  createDept (dept: Object): Observable<Object>{
    return this.http.post(`${this.Url}/create`, dept);
  }

  /** Update Department */
  updateDept (deptID: number, value: any): Observable<Object>{
    return this.http.put(`${this.Url}/update/${deptID}`, value);
  }

  /** Delete Department by id from the server */
  deleteDept (deptID: number): Observable<any>{
    return this.http.delete(`${this.Url}/delete/${deptID}`);
  }
}
