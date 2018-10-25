import React, { Component, Fragment } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import DrawingForm from './Components/drawingForm'
import DrawingList from './Components/drawingList'
import Drawing from './Components/drawing'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { status: false}
    this.selectedDrawing = this.selectedDrawing.bind(this);
    this.changeStatus    = this.changeStatus.bind(this);
  }

  selectedDrawing(drawing){
    this.setState({selectedDrawing: drawing, status: true})
  }

  changeStatus(){
    this.setState({status: false})
  }

  componentWillUnmount(){
    this.setState({status: false})
  }

  render() {

    let content = (
      <div>
        <DrawingForm />
        <DrawingList onClick = {this.selectedDrawing}/>
      </div>
    )

    if(this.state.status){
      content = ( <div><Drawing drawing = {this.state.selectedDrawing} key = {this.state.selectedDrawing.id}/></div>)
    }

    return (
      <Fragment>
          <div className="App-header">
            <i className="fa fa-home fa-2x" aria-hidden="true" onClick = {this.changeStatus}></i>
          </div>
          {content}
      </Fragment>
    );
  }
}

export default App;