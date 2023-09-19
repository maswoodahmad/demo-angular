import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IEmployee} from "./employee";
import { Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private  http:HttpClient) {


  }

  private _url:string="assets/Data/employee.json";



  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
      .pipe(
        catchError((error: any) => {
          // Handle the error here, for example, you can log it
          console.error('An error occurred:' );

          // You can choose to re-throw the error or return a default value
          // For re-throwing the error:
          return throwError(error.message|| 'An error occurred while fetching employees.');

          // For returning a default value:
          // return of([]); // Assuming an empty array as the default value
        })
      );
}

}
