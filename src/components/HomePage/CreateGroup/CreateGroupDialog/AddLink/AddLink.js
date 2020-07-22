import React, { Component } from 'react';

import './AddLink.scss';
import AddLinkButton from './AddLinkButton/AddLinkButton';
import AddLinkDialog from './AddLinkDialog/AddLinkDialog';


class AddLink extends Component {
    state = {
        open: false
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        console.log(this.state);
        return (
            <div className="add_link">
                <AddLinkButton
                    handleClickOpen={this.handleClickOpen}
                />
                <AddLinkDialog
                    open={this.state.open}
                    handleClose={this.handleClose}
                    addLink={this.props.addLink}
                />
            </div>
        );
    }
}

export default AddLink;
