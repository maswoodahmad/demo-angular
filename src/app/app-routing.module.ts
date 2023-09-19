import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CityListComponent} from "./city-list/city-list.component";
import {DepartmentListComponent} from "./department-list/department-list.component";
import {Error404Component} from "./city-list/error404/error404.component";
import {CityDetailComponent} from "./city-list/city-detail/city-detail.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  {path:'', redirectTo:'/department', pathMatch:'full'},
  {path:'department', component:DepartmentListComponent},
  {path:'city',component:CityListComponent},
  {path:'city/:id', component:CityDetailComponent},
  {path:'form', component:FormComponent},
  {path:'**' ,component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[DepartmentListComponent,CityListComponent,Error404Component]
