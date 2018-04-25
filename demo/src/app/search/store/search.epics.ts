import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { NgRedux } from '@angular-redux/store';
import { ActionsObservable } from 'redux-observable';

import { catchError, concat, switchMap, takeUntil } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

import { SearchActionsService } from './search.actions';

@Injectable()
export class SearchEpicsService {

  constructor (private http: HttpClient) {}

  onFetchPages = (action$: ActionsObservable<any>, store: NgRedux<any>) => {

    const cancel$ = action$.ofType(SearchActionsService.FETCH_PAGES);

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
