import React, { Component } from 'react';
// import {
//   createDrawing,
// } from './api';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import PropTypes from 'prop-types';


const styles = theme => ({
  iconSmall: {
    fontSize: 20,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});


class DrawingForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      drawingName: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    console.log('this',this)
  }

  handleSubmit(event){
    event.preventDefault();
    // createDrawing(this.state.drawingName);
    this.setState({
      drawingName: '',
    });
  }

  render() {

    const { classes } = this.props;

    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.drawingName}
            onChange={(evt) => this.setState({ drawingName: evt.target.value })}
            placeholder="Drawing name"
            className="Form-drawingInput"
            required
          />

          <Button variant="contained" color="primary" className={classes.button} type="submit">
            Send
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>

        </form>
      </div>
    );
  }
}

DrawingForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(DrawingForm);