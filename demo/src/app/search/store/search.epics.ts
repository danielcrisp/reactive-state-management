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

        const url = 'https://en.wikipedia.org/w/api.php';

        // Set up the query params we need
        const params = new HttpParams({
          fromObject: {
            // Required by Wikipedia
            action: 'opensearch',
            format: 'json',
            formatversion: '2',
            namespace: '0',
            limit: '10',
            origin: '*',
            // Our search term
            search: payload.q
          }
        });

        // Makes the request and switches to success / error Action
        const request$ = this.http.get(url, {
          params
        }).pipe(
          // Handles success
          switchMap((response: any) => {
            // Emit PAGES_SUCCESS with the response
            return of({
              type: SearchActionsService.PAGES_SUCCESS,
              payload: {
                response
              }
            });
          }),
          // Handles failure
          catchError((response: HttpErrorResponse) => {
            // Emit PAGES_ERROR
            // In reality we would inspect the actual error response and even
            // retry the request automatically
            return of({
              type: SearchActionsService.PAGES_ERROR
            });
          }),
          // Cancels any inflight request if a new search is made
          takeUntil(cancel$)
        );

        return request$;

      })
    );
  }
}
