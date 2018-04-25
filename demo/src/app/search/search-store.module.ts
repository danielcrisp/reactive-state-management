import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineEpics } from 'redux-observable';

import { StoreService } from '../@store/store.service';

import { SearchActionsService } from './store/search.actions';
import { SearchEpicsService } from './store/search.epics';
import searchReducer from './store/search.reducers';

@NgModule({
  imports: [CommonModule],
  providers: [
    SearchActionsService,
    SearchEpicsService
  ]
})
export class SearchStoreModule {

  constructor (storeService: StoreService, searchEpics: SearchEpicsService) {

    storeService.reducers$.next({
      name: 'search', // this will be the object name
      reducer: searchReducer
    });

    storeService.epics$.next(combineEpics(
      searchEpics.onFetchPages,
      // ... add each epic here
    ));
  }
}
