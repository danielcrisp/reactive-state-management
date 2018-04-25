import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './@shared/components/root/root.component';

const routes: Routes = [{
  path: '',
  component: RootComponent
}, {
  path: 'search',
  loadChildren: './search/search.module#SearchModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
