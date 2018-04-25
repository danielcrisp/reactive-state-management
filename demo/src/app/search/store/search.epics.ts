import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { ActionsObservable } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';

import { SearchActionsService } from './search.actions';

@Injectable()
export class SearchEpicsService {

  onFetchPages = (action$: ActionsObservable<any>, store: NgRedux<any>) => {
    return action$.ofType(SearchActionsService.FETCH_PAGES).pipe(
      switchMap(({
        payload
      }) => {
        console.log(payload);
        return empty(); // Return an empty stream. We'll replace this later
      })
    );
  }
}
