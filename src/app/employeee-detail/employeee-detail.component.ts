import { Component } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {IEmployee} from "../employee";

@Component({
  selector: 'app-employeee-detail',
  // templateUrl: './employeee-detail.component.html',
  template: `<h2>Employee detail</h2>
<ul  *ngFor="let emp of employee" >

  <li>{{emp.firstName}} - {{emp.firstName}}- {{emp.age}}</li>

</ul>`,
  styleUrls: ['./employeee-detail.component.css']
})
export class EmployeeeDetailComponent {
  employee:IEmployee[]=[];
constructor(private _employeeService:EmployeeService) {
}
ngOnInit(){
this._employeeService.getEmployees()
    .subscribe(data=>this.employee=data);
}





}
