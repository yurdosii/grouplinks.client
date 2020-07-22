import React, { Component } from 'react';

import classes from './CreateGroup.module.scss';
import CreateGroupButton from './CreateGroupButton/CreateGroupButton';
import CreateGroupDialog from './CreateGroupDialog/CreateGroupDialog';


class CreateGroup extends Component {
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
        return (
            <div className={classes.create_group}>
                <CreateGroupButton
                    handleClickOpen={this.handleClickOpen}
                />
                <CreateGroupDialog
                    open={this.state.open}
                    handleClose={this.handleClose}
                    getData={this.props.getData}
                />
            </div>
        );
    }
}

export default CreateGroup;
