

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators'
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //private apiUrl = 'http://localhost:8083';
  private apiUrl ='https://jwtbackend-production.up.railway.app'

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    let url = `${this.apiUrl}/employees`;
    return this.http.get<Employee[]>(url).pipe(catchError(this.handleError))
  }
  
  getEmployee(id: number): Observable<Employee>{
    let url = `${this.apiUrl}/employee/${id}`;
    return this.http.get<Employee>(url).pipe(catchError(this.handleError)); 
  }
  
  addEmployee(employee: Employee): Observable<Employee> {
    let url = `${this.apiUrl}/employee`;
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Employee>(url, employee, httpOptions).pipe(catchError(this.handleError));
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    let url = `${this.apiUrl}/employee/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.put<Employee>(url, employee, httpOptions).pipe(catchError(this.handleError));
  }
  
  deleteEmployee(ids: number[]){
    console.log(ids);
    let url = `${this.apiUrl}/employees/${ids.join(',')}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  private handleError(error: any){
    console.log(error);
    return throwError(error);
  }

}



