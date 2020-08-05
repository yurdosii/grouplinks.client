import React, { Component } from 'react';

import DeleteLinkButton from './DeleteLinkButton/DeleteLinkButton';
import DeleteLinkDialog from './DeleteLinkDialog/DeleteLinkDialog';


class DeleteLink extends Component {
    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    deleteLink = () => {
        this.handleClose();
        this.props.deleteLink(this.props.link.id);
    }

    render() {
        return (
            <div className="">
                <DeleteLinkButton
                    handleClickOpen={this.handleClickOpen}
                />
                <DeleteLinkDialog 
                    open={this.state.open}
                    link={this.props.link}
                    deleteLink={this.deleteLink}
                    handleClose={this.handleClose}
                />
            </div>
        );
    }
}

export default DeleteLink;
