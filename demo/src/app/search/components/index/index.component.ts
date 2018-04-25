import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

import { SearchActionsService } from '../../store/search.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  // Selects properties from the store and creates Observables
  @select(['search', 'q']) q$: Observable<string>;
  @select(['search', 'pages']) pages$: Observable<any[]>;
  @select(['search', '_loading']) loading$: Observable<boolean>;
  @select(['search', '_error']) error$: Observable<boolean>;

  // The value of the input
  query: string;

  constructor (private searchActions: SearchActionsService) { }

  onSubmit () {
    // Dispatches a FETCH_PAGES action with the value of the input
    this.searchActions.fetchPages({
      q: this.query
    });
  }
}
