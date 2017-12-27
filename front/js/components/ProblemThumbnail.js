/**
 * @fileOverview Problem Thumbnail component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router';

export default class ProblemThumbnail extends React.Component {
  static propTypes = {
    problems: PropTypes.isRequired,
    fetchAllProblems: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchAllProblems();
  }

  render() {
    if (this.props.problems == null) {
      return false;
    }
    return (
      <div>
        <Link to="/problems" href="/problems" />
      </div>
    );
  }
}
