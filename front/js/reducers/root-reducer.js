/**
 * @fileOverview Root reducer, combines all reducers.
 */

import { combineReducers } from 'redux';

import displayProblemReducer from './display-problem-reducer';

export default combineReducers({
  displayProblem: displayProblemReducer,
});
