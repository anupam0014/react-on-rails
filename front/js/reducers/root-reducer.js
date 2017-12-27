/**
 * @fileOverview Root reducer, combines all reducers.
 */

import { combineReducers } from 'redux';

import serverTimestampReducer from './server-timestamp-reducer';
import displayProblemReducer from './display-problem-reducer';

export default combineReducers({
  serverTimestamp: serverTimestampReducer,
  displayProblem: displayProblemReducer,
});
