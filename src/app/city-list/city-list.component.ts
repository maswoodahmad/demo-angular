import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-city-list',
  template: `

    <li  (click)="onSelect(city)"  *ngFor="let city of cities">
     <span>{{city.id}} &nbsp; {{city.name}} </span>

    </li>

  `,
  styles: [
  ]
})
export class CityListComponent {
constructor(private router:Router) {
}
  cities=[
    {id:1, name:"angular"},
    {id:2, name:"java"},
    {id:3, name:"ruby "},
  ]


  getCityList(){
  return this.cities;
  }

  onSelect(city:any){
this.router.navigate(['/city', city.id])


  }


}
