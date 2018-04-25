import { NgModule } from '@angular/core';

import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { ActionsObservable, createEpicMiddleware } from 'redux-observable';
import { filter, mergeMap } from 'rxjs/operators';

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

 constructor (
    ngRedux: NgRedux<any>,
    devTools: DevToolsExtension,
    storeService: StoreService
  ) {

    const rootEpic = (action$: ActionsObservable<any>, store: NgRedux<any>) => {
      return storeService.epics$.pipe(
        filter(epic => !!epic),
        mergeMap(epic => {
          return epic(action$, store);
        })
      );
    };

    const middleware = [createEpicMiddleware(rootEpic)];
    const enhancers = [];

    if (devTools.isEnabled()) {
      enhancers.push(devTools.enhancer());
    }

    ngRedux.configureStore(
      rootReducer(), {},
      middleware,
      enhancers
    );

    const injectedReducers = {};

    storeService.reducers$.pipe(
      filter(reducer => !!reducer)
    ).subscribe((reducer) => {
      injectedReducers[reducer.name] = reducer.reducer;
      ngRedux.replaceReducer(rootReducer(injectedReducers));
    });

  }
}
