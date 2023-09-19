import { Component } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {IEmployee} from "../employee";
import {User} from "../user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private _ser:EmployeeService) {
  }

  formData : IEmployee[]=[];

  ngOnInit(){

   this._ser.getEmployees().subscribe(x=>this.formData=x)

  }

  topics=['angular', 'react', 'vue'];

  userModel = new User('rob', 'rob@gmail.com', 555, 'angular','morning',true);

}
