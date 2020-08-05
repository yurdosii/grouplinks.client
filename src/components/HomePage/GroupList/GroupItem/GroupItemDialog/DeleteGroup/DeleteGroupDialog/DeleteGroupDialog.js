import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';


class DeleteGroupDialog extends Component {

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Deleting group '{this.props.item.name}'
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete group '{this.props.item.name}'
                            (links: {this.props.item.links.length}) ?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={this.props.deleteGroup} color="primary">
                        Yes
                    </Button>
                    <Button onClick={this.props.handleClose} color="primary" autoFocus>
                        No
                    </Button>
                </DialogActions>

            </Dialog>
        );
    }
}

export default DeleteGroupDialog;
