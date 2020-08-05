import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';


class DeleteLinkDialog extends Component {

    getDescription = () => {
        let description = this.props.link.description;

        if (description) {
            description = `(${description})`
        }

        return description
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Link deletion
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {/* // TODO - video title */}
                        Are you sure you want to delete ? <br/>
                        {this.getDescription()}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={this.props.deleteLink} color="primary">
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

export default DeleteLinkDialog;
