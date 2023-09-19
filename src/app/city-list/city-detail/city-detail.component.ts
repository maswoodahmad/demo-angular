import { Component } from '@angular/core';
import {ActivatedRoute, Router, Routes, ParamMap} from "@angular/router";
import {CityListComponent} from "../city-list.component";

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent {
  constructor(private route:ActivatedRoute,

              private router:Router ) {
  }
departmentId!:number ;


  ngOnInit(){
    // this.departmentId= String(<string>this.route.snapshot.paramMap.get('id'));
this.route.paramMap.subscribe((params:ParamMap )=>{
  let id = parseInt(<string>params.get('id'));
  this.departmentId=id;
}
);


  }

  goPrevious(){

    let prId = this.departmentId-1;
    this.router.navigate(['city', prId])
  }


  goNext(){

    let prId = this.departmentId +1;
    this.router.navigate(['city', prId])
  }

}
