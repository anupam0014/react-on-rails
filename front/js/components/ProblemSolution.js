/**
 * @fileOverview Problem Thumbnail component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProblemSolution extends Component {
  static defaultProps = {
    problem: {},
  }

  static propTypes = {
    problem: PropTypes.oneOfType([null, PropTypes.object]),
    fetchSelectedProblem: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSelectedProblem(id);
  }

  render() {
    if (this.props.problem == null) {
      return false;
    }

    return (
      <div className="solution-container">
        <h1>{this.props.problem.name}</h1>
        <hr className="hr-danger" />
        <p>{this.props.problem.description}
        </p>
      </div>
    );
  }
}
