import { Component } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {IEmployee} from "../employee";

@Component({
  selector: 'app-employee-list',
  //templateUrl: './employee-list.component.html',
  template:`
    <h2>Employee list</h2>
    <h1 [style.color]="'red'" >{{errMsg}}</h1>
   <ul  *ngFor="let emp of employee" >

     <li>{{emp.firstName}}</li>

   </ul>

  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

 employee:IEmployee[]=[];
 errMsg:string="";


  constructor(private _employeeService:EmployeeService) {
  }
  ngOnInit(){

    this._employeeService.getEmployees()
      .subscribe(data=>{
        console.log(data);
        this.employee=data},
      error=>this.errMsg=error
      );
  }

}
