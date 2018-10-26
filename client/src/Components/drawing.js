
import React, { Component } from 'react';
import Canvas from 'simple-react-canvas';
import { publishLine, subscribeToDrawingsLines } from '../app-Api/api';


class Drawing extends React.Component{

	constructor(props){
		super(props)
		this.handleDraw = this.handleDraw.bind(this);

		this.state = {
			lines: []
		}
	}

	componentDidMount(){
		subscribeToDrawingsLines(this.props.drawing.id, (line) => {
			console.log('line', line)
			this.setState((prevState) => { return { lines: [ ...prevState.lines, line] }} )
		})
	}

	handleDraw(line){
		publishLine(this.props.drawing.id, line)
	}

	render(){
		return(this.props.drawing) ? 
			<div>
				<div className = "drawingName"><strong> Drawing Name:</strong> {this.props.drawing.name} </div>
				<div className = "canvas">
					<Canvas onDraw = {this.handleDraw} drawingEnabled = {true} lines = {this.state.lines}/>
				</div>
			</div>
		: null
	}

}

export default Drawing;
