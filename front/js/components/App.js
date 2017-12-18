/**
 * @fileOverview App component.
 */

import React from 'react';
import NavbarInstance from './Navbars';
import Main from '../containers/MainContainer';

const App = () => (
  <div className="container-fluid">
    <NavbarInstance />
    <Main />
  </div>
);

export default App;
