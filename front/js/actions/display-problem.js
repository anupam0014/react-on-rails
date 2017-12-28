/**
 * @fileOverview Server Timestamp related actions.
 */

import axios from 'axios';

export const ALL_PROBLEMS = 'all_problems';
export const SELECTED_PROBLEM = 'selected_problem';

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

const selectedProblem = (problem) => {
	return { type: SELECTED_PROBLEM, problem };
};

export const fetchSelectedProblem = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/problems/${id}`);
		dispatch(selectedProblem(res.data.problem));
	} catch (error) {
		log.error(error);
	}
};