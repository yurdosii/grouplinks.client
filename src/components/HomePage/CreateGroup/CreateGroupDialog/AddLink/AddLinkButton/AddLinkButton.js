import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import './AddLinkButton.scss';


class AddLinkButton extends Component {

    render() {
        return (
            <Button onClick={this.props.handleClickOpen}
                color="primary"
                // className="button"
            >
                Add Link
            </Button>
        );
    }
}

export default AddLinkButton;
