import React, { Component } from 'react';

import DeleteGroupButton from './DeleteGroupButton/DeleteGroupButton';
import DeleteGroupDialog from './DeleteGroupDialog/DeleteGroupDialog';


class DeleteGroup extends Component {
    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    deleteGroup = () => {
        this.handleClose();
        this.props.deleteGroup();
    }

    render() {

        return (
            <div className="">
                <DeleteGroupButton
                    handleClickOpen={this.handleClickOpen}
                />
                <DeleteGroupDialog 
                    open={this.state.open}
                    item={this.props.item}
                    deleteGroup={this.deleteGroup}
                    handleClose={this.handleClose}
                />
            </div>
        );
    }
}

export default DeleteGroup;
