import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import classes from './CreateGroupButton.module.scss';


class CreateGroupButton extends Component {

    render() {
        return (
            <Button
                variant="outlined"
                color="primary"
                onClick={this.props.handleClickOpen}
                className={classes.button}
            >
                Create group
            </Button>
        );
    }
}

export default CreateGroupButton;
