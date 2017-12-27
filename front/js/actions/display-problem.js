/**
 * @fileOverview Server Timestamp related actions.
 */

import axios from 'axios';

export const ALL_PROBLEMS = 'all_problems';

const allProblems = (problems) => {
  return { type: ALL_PROBLEMS, problems };
};

export const fetchAllProblems = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/problems');

    dispatch(allProblems(res.data.problems));
  } catch (error) {
    log.error(error);
  }
};
