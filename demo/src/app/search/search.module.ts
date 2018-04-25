import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SearchRoutingModule } from './search-routing.module';
import { SearchStoreModule } from './search-store.module';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SearchRoutingModule,
    SearchStoreModule
  ],
  declarations: [IndexComponent]
})
export class SearchModule { }
