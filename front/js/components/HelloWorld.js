/**
 * @fileOverview Hello World component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import NavbarInstance from './Navbars';

class HelloWorld extends React.Component {
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
      <div>
        <NavbarInstance />
        <h1>Hello World!</h1>
        <p>Timestamp: {timestamp}</p>
      </div>
    );
  }
}

export default HelloWorld;
