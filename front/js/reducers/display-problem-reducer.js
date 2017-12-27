/**
 * @fileOverview The Server Timestamp reducer.
 */

import { ALL_PROBLEMS } from '../actions/display-problem';

const initialState = {
  problems: null,
};

const displayProblemReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_PROBLEMS:
      return {
        ...state,
        problems: action.problems,
      };

    default:
      return state;
  }
};

export default displayProblemReducer;
