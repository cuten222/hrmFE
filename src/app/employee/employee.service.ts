import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private empUrl = 'http://192.168.4.172:8080/emp';
  constructor(private http: HttpClient) { 

  }

  /** GET Employees from the server */
  getEmps (): Observable<any>{
    return this.http.get<any>(`${this.empUrl}/list`);
  }

  getLimitEmp(start:number, pageSize:number): Observable<any>{
    // const params = request;
    return this.http.get<any>(`${this.empUrl}/listLimit?start=${start}&limit=${pageSize}`);
  }

  /** GET Employees by id from the server */
  getEmp(empID: number): Observable<any>{
    return this.http.get<any>(`${this.empUrl}/get/${empID}`);
  }

  /** Create Employees */
  createEmp (emp: Object): Observable<Object>{
    return this.http.post(`${this.empUrl}/create`, emp);
  }

  /** Update Employees */
  updateEmp (empID: number, value: any): Observable<Object>{
    return this.http.put(`${this.empUrl}/update/${empID}`, value);
  }

  /** Delete Employees by id from the server */
  deleteEmp (empID: number): Observable<any>{
    return this.http.delete(`${this.empUrl}/delete/${empID}`);
  }
}
