import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import bookReducer from './reducers/book-reducers';
import singleBookReducer from './reducers/single-book-reducer';
import bookHistoryReducer from './reducers/book-history-reducer';
import auth from './reducers/auth';

const rootReducer = combineReducers(
  {
    bookReducer,
    singleBookReducer,
    bookHistoryReducer,
    flashMessages,
    auth
  });
export default rootReducer;
