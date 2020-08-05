import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import classes from './DeleteLinkButton.module.scss';


class DeleteLinkButton extends Component {

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

export default DeleteLinkButton;
