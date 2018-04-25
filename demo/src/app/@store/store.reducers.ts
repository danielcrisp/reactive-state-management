import { combineReducers } from 'redux';

const defaultState = {
 hello: 'world'
};

export default function rootReducer (injectedReducers: any = {}) {
 return combineReducers({
   // Core reducers
   example: (state: any = defaultState) => {
     return {
       ...state
     };
   },
   // Lazy-loaded reducers
   ...injectedReducers
 });
}
