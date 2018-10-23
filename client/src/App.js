import React, { Component, Fragment } from 'react';
import './App.css';
// import PropTypes from 'prop-types';
// import {subscribeToTimer} from './app-Api/api.js'
import DrawingForm from './Components/drawingForm';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      timeStamp: 'No, value has been emitted!'
    }
  }

  render() {
    return (
      <Fragment>
          <div className="App-header">
            <h2>RealTime Drawing !</h2>
          </div>
           Welcome! {this.state.timeStamp}
           <DrawingForm />
      </Fragment>
    );
  }
}

export default App;