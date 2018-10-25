
import React, { Component } from 'react';
import {
  subscribeToDrawings,
} from '../app-Api/api';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

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

  render() {
    const { classes  } = this.props;
    const drawings = this.state.drawings.map((drawing) => (

        <ListItemLink key = {drawing.id} onClick = { () => this.props.onClick(drawing)} >
          <ListItemText primary = {drawing.name} />
        </ListItemLink>
    ))
    return (
        <div className={classes.root}>
      		<List component="nav">
      			{drawings}
      		</List>
    	</div>
    );
  }
}

DrawingList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawingList);