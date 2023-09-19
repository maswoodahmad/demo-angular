import { Component } from '@angular/core';
import { FakeApiService } from '../fake-api.service';

@Component({
  selector: 'app-item-list',
  template: `
    <ul>
      <li *ngFor="let item of items">
        {{ item.name }}
        <button (click)="deleteItem(item.id)">Delete</button>

      </li>


    </ul>
  `
})
export class ItemListComponent {
  items: any[];

  constructor(private fakeApiService: FakeApiService) {
    this.items = fakeApiService.getAll();
  }

  deleteItem(id: number) {
    this.fakeApiService.delete(id);
    this.items = this.fakeApiService.getAll();
  }


}
