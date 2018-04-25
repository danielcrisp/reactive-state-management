import { NgModule } from '@angular/core';

import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';

import rootReducer from './store.reducers';
import { StoreService } from './store.service';

@NgModule({
  imports: [
    NgReduxModule
  ],
  providers: [
    StoreService
  ]
})
export class StoreModule {

 constructor(ngRedux: NgRedux <any> , devTools: DevToolsExtension) {

   const middleware = [];
   const enhancers = [];

   if (devTools.isEnabled()) {
     enhancers.push(devTools.enhancer());
   }

   ngRedux.configureStore(
     rootReducer(), {},
     middleware,
     enhancers
   );

 }
}
