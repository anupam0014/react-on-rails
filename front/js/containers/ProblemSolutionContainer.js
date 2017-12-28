/**
 * @fileOverview Hello World container.
 */

import { connect } from 'react-redux';

import ProblemSolution from '../components/ProblemSolution';
import { fetchSelectedProblem } from '../actions/display-problem';

const mapStateToProps = ({ displayProblem }) => ({
  problem: displayProblem.selected_problem,
});

const mapDispatchToProps = {
  fetchSelectedProblem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProblemSolution);
