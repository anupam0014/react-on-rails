/**
 * @fileOverview Hello World component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ProblemThumbnail from '../containers/ProblemThumbnailContainer';
import ProblemSolution from './ProblemSolution';
import ProblemForm from './ProblemForm';

class Main extends React.Component {
  static propTypes = {
    timestamp: PropTypes.number,
    fetchServerTimestamp: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchServerTimestamp();
  }

  render() {
    const { timestamp } = this.props;

    return (
      <div className="container-fluid">
        <main>
          <Switch>
            <Route exact path="/" component={ProblemThumbnail} />
            <Route path="/problems/:id" component={ProblemSolution} />
            <Route path="/form" component={ProblemForm} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Main;
