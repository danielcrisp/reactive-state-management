import { SearchActionsService } from './search.actions';

const INITIAL_STATE = {
  q: null,
  pages: [],
  _loading: false,
  _error: false
};

export default function searchReducer (state = INITIAL_STATE, action: any) {

  switch (action.type) {

    case SearchActionsService.FETCH_PAGES: {
      return {
        ...INITIAL_STATE, // start with clean state
        q: action.payload.q
      };
    }

    case SearchActionsService.PAGES_LOADING: {
      return {
        ...state, // copy the previous state
        pages: [],
        _loading: true
      };
    }

    case SearchActionsService.PAGES_SUCCESS: {

      const { response } = action.payload;

      const titles = response[1];
      const descriptions = response[2];
      const urls = response[3];

      return {
        ...state, // copy the previous state
        pages: titles.map((title, index) => {
          return {
            title,
            description: descriptions[index],
            url: urls[index]
          };
        }),
        _loading: false
      };
    }

    case SearchActionsService.PAGES_ERROR: {
      return {
        ...INITIAL_STATE, // reset state
        _error: true
      };
    }
  }
  return state;
}
