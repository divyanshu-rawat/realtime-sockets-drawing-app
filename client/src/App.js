import React, { Component, Fragment } from 'react';
import './App.css';
import ErrorBoundary from './Components/errBoundary'
// import PropTypes from 'prop-types';

class App extends Component {

  componentDidCatch(error, errorInfo){

  }

  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <div className="App-header">
            <h2>RealTime Drawing !</h2>
          </div>
           Welcome!
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default App;