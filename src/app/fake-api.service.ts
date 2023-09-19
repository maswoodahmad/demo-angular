// src/app/fake-api/fake-api.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  private data: any[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  constructor() {}

  getAll() {
    return this.data;
  }

  getById(id: number) {
    return this.data.find(item => item.id === id);
  }

  create(item: any) {
    this.data.push(item);
  }

  update(id: number, updatedItem: any) {
    const index = this.data.findIndex(item => item.id === id);
    if (index !== -1) {
      this.data[index] = { ...updatedItem, id };
    }
  }

  delete(id: number) {
    this.data = this.data.filter(item => item.id !== id);
  }
}
