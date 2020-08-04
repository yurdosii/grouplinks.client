import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import classes from './AddLinkButton.module.scss';


class AddLinkButton extends Component {

    render() {
        return (
            <Button onClick={this.props.handleClickOpen}
                color="primary"
                className={classes.button}
            >
                Add Link
            </Button>
        );
    }
}

export default AddLinkButton;
