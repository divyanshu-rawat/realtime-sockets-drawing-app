
import React, { Component } from 'react';
import Canvas from 'simple-react-canvas';

class Drawing extends React.Component{

	render(){
		return(this.props.drawing) ? 
			<div>
				<div className = "drawingName"><strong> Drawing Name:</strong> {this.props.drawing.name} </div>
				<div className = "canvas">
					<Canvas drawingEnabled = {true} />
				</div>
			</div>
		: null
	}

}

export default Drawing;
