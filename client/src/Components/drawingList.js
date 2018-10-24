
import React, { Component } from 'react';
import {
  subscribeToDrawings,
} from '../app-Api/api';


class DrawingList extends Component {

  constructor(props){
    super(props)
    this.state = {
      drawings: [],
    }

    subscribeToDrawings((drawing) =>{
    	this.setState( prevState => ({
    		drawings: prevState.drawings.concat([drawing])
    	}))
    })
  }

  componentDidMount(){}

  render() {
    const { classes  } = this.props;
    const drawings = this.state.drawings.map((drawing) => (
    	 <li key = {drawing.id}> {drawing.name} </li>
    ))
    console.log('drawings',this.state.drawings);
    return (
        <ul>{drawings}</ul>
    );
  }
}

export default DrawingList;