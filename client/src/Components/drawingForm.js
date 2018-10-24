import React, { Component } from 'react';
import {
  createDrawings,
} from '../app-Api/api';


import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';



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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
    createDrawings(this.state.drawingName);
    this.setState({
      drawingName: '',
    });
  }

  render() {

    const { classes } = this.props;

    return (
      <div className="Form">
        <form  noValidate autoComplete="off">

           <TextField
            id="outlined-name"
            type="text"
            label="Name"
            className={classes.textField}
            value={this.state.drawingName}
            onChange={(evt) => this.setState({ drawingName: evt.target.value })}
            placeholder="Drawing name"
            margin="normal"
            variant="outlined"
            required
          />

          <Button variant="contained" color="primary" className={classes.button} type="submit" onClick = {this.handleSubmit}>
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