
import React, { Component } from 'react';
import { subscribeToConnectionEvent } from '../app-Api/api';
import '../App.css';


class Connection extends Component {

	constructor(props){
		super(props);
		this.state = {
			connectionState: 'connecting',
		}
		subscribeToConnectionEvent( ({ state: connectionState , port, }) => {
			this.setState({
				 connectionState, port
			})
		})
	}

	render() {
	    let content = null;

	    if (this.state.connectionState === 'disconnected') {
	      content = (
	         <div class="alert alert-danger">
	          <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
			  <strong>disconnected!</strong> We've lost connection to the server...
			</div>
	      );
	    }
	    if (this.state.connectionState === 'connecting') {
	      content = (
	         <div class="alert alert-info">
	          <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
			  <strong>Connecting...!</strong> Please wait...
			</div>
	      );
	    }
	    if (this.state.connectionState === 'connected') {
	      content = (
	          <div class="alert alert-success fade in">
			    <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
			    <strong>Connected!</strong> Socket port: {this.state.port}
			  </div>
	      );
	    }

	    return (
	      <div>
			  {content}
	      </div>
	    );
  }
}


export default Connection;
