// src/app/fake-api/fake-api.module.ts
import { NgModule } from '@angular/core';
import {FakeApiService} from "../fake-api.service";


@NgModule({
  providers: [FakeApiService]
})
export class FakeApiModule {}
