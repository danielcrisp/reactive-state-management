import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  declarations: [IndexComponent]
})
export class SearchModule { }
