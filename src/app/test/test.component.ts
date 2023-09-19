import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '[app-test]',
  //templateUrl: './test.component.html',
  template:`<div>
<h1>{{5.678| number:'1.2-2'}}</h1>
    <h1>{{5.678| number:'3.4-5'}}</h1>
    <h1>{{5.678| number:'3.1-2  '}}</h1>
    <h1>{{5.678| percent}}</h1>
    <h1>{{5.678| currency:'US'}}</h1>

    <h2>{{date| date:'short'}}</h2>
    <h2>{{date| date:'shortDate'}}</h2>
    <h2>{{date| date:'shortTime'}}</h2>



    <h1>data from parent data {{parentData| slice:3:6}}</h1>

    <button (click)="childButton()"> HEY I M BUTTON</button>

<!--    <div *ngIf="displayNmae; then thenBlock else elseBlock"> hey</div>-->
<!--    <ng-template #thenBlock>-->
<!--      This content is displayed when the condition is true.-->
<!--    </ng-template>-->
<!--    <ng-template #elseBlock>-->
<!--      This content is displayed when the condition is false.-->
<!--    </ng-template>-->


<!--    <div  [ngSwitch] ="color">-->
<!--      <div [style.color]="color"  *ngSwitchCase="'red'"> you picked red color</div>-->
<!--      <div  [style.color]="color" *ngSwitchCase="'blue'"> you picked blue color</div>-->
<!--      <div [style.color]="color"  *ngSwitchCase="'green'"> you picked green color</div>-->
<!--      <div *ngSwitchDefault> pick again</div>-->
<!--    </div>-->

<div *ngFor="let color of colors; index as i; odd as l">

  <h2 [style.color]="color" >{{l}} {{i + color}}</h2>
</div>

  </div>`,
  //styleUrls: ['./test.component.css']
  styles:[`
  .test-success{
 :gray;
  }
  .test-danger{
    color:red;
  }
  `]
})
export class TestComponent implements OnInit{
  ngOnInit(): void {
  }

  public colors=["red","blue","green","yellow"];

  displayNmae=true;
  @Input()
public parentData:any;

public date= new Date();
  public color="green";

  @Output()
  public childEvent = new EventEmitter();
  childButton(){
    this.childEvent.emit('hey i am from child');
  }







}
