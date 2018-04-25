import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchStoreModule } from './search-store.module';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchStoreModule
  ],
  declarations: [IndexComponent]
})
export class SearchModule { }
