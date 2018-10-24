import React, { Component, Fragment } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import DrawingForm from './Components/drawingForm'
import DrawingList from './Components/drawingList'

class App extends Component {

  render() {
    return (
      <Fragment>
          <div className="App-header">
            <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
          </div>
           <DrawingForm />
           <DrawingList />
      </Fragment>
    );
  }
}

export default App;