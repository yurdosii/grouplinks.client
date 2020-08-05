import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import classes from './DeleteGroupButton.module.scss';


class DeleteGroupButton extends Component {

    render() {

        return (
            <Button
                onClick={this.props.handleClickOpen}
                className={classes.button}
            >
                Delete
            </Button>
        );
    }
}

export default DeleteGroupButton;
