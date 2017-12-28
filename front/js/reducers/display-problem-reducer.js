/**
 * @fileOverview The Server Timestamp reducer.
 */

import { ALL_PROBLEMS, SELECTED_PROBLEM } from '../actions/display-problem';

const initialState = {
  problems: null,
  selected_problem: null,
};

const displayProblemReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_PROBLEMS:
      return {
        ...state,
        problems: action.problems,
      };
    case SELECTED_PROBLEM:
      return {
        ...state,
        selected_problem: action.problem,
      };

    default:
      return state;
  }
};

export default displayProblemReducer;
