/**
 * @fileOverview Hello World container.
 */

import { connect } from 'react-redux';

import Main from '../components/Main';
import { fetchServerTimestamp } from '../actions/server-timestamp';

const mapStateToProps = ({ serverTimestamp }) => ({
  timestamp: serverTimestamp.timestamp,
});

const mapDispatchToProps = {
  fetchServerTimestamp,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
