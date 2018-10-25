
import React, { Component } from 'react';
import Canvas from 'simple-react-canvas';

class Drawing extends React.Component{

	render(){
		return(this.props.drawing) ? 
			<div>
				<div>	{this.props.drawing.name} </div>
				<Canvas drawingEnabled = {true} />
			</div>
		: null
	}

}

export default Drawing;
