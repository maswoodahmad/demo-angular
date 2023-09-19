import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ItemListComponent } from './item-list/item-list.component';
import { TestComponent } from './test/test.component';
import {FormsModule} from "@angular/forms";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeeDetailComponent } from './employeee-detail/employeee-detail.component';
import {EmployeeService} from "./employee.service";
import {HttpClientModule} from "@angular/common/http";
import { CityListComponent } from './city-list/city-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";
import { NavbarComponent } from './navbar/navbar.component';
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import { Error404Component } from './city-list/error404/error404.component';
import { CityDetailComponent } from './city-list/city-detail/city-detail.component';
import { FormComponent } from './form/form.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import { FormDetailComponent } from './form-detail/form-detail.component';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
     TestComponent,
     EmployeeListComponent,
     EmployeeeDetailComponent,
     CityListComponent,
     DepartmentListComponent,
    routingComponents,
    NavbarComponent,
    Error404Component,
    CityDetailComponent,
    FormComponent,
    FormDetailComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatBadgeModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatTableModule,
        MatInputModule,

    ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
