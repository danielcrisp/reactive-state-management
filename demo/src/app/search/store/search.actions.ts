import { Injectable } from '@angular/core';

import { dispatch } from '@angular-redux/store';

@Injectable()
export class SearchActionsService {

  static readonly FETCH_PAGES = 'FETCH_PAGES';
  static readonly PAGES_LOADING = 'PAGES_LOADING';
  static readonly PAGES_SUCCESS = 'PAGES_SUCCESS';
  static readonly PAGES_ERROR = 'PAGES_ERROR';

  @dispatch()
  fetchPages = (payload: {
    q: string
  }) => ({
    type: SearchActionsService.FETCH_PAGES,
    payload
  })

}
