/**
 * @fileOverview Hello World component.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProblemThumbnail from '../containers/ProblemThumbnailContainer';
import ProblemSolution from '../containers/ProblemSolutionContainer';
import ProblemForm from './ProblemForm';

const Main = () => (
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

export default Main;
