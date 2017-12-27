/**
 * @fileOverview Hello World container.
 */

import { connect } from 'react-redux';

import ProblemThumbnail from '../components/ProblemThumbnail';
import { fetchAllProblems } from '../actions/display-problem';

const mapStateToProps = ({ displayProblem }) => ({
  problems: displayProblem.problems,
});

const mapDispatchToProps = {
  fetchAllProblems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProblemThumbnail);
