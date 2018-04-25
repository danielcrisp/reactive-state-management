import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StoreService {

  epics$: BehaviorSubject<any>;
  reducers$: BehaviorSubject<any>;

  constructor () {
    this.epics$ = new BehaviorSubject(null);
    this.reducers$ = new BehaviorSubject(null);
  }
}
