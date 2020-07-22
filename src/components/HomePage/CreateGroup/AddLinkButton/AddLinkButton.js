import React, { Component } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import DescriptionTextField from 'components/Fields/DescriptionTextField/DescriptionTextField'; 
import './AddLinkButton.scss';


class AddLinkButton extends Component {
    state = {
        open: false,
        link: {
            url: '',
            description: '',
            isDone: false
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    onUrlChange = (event) => {
        let { link } = this.state;
        link.url = event.target.value;

        this.setState({ link });
    }

    setDescription = (description) => {
        let { link } = this.state;
        link.description = description;

        this.setState({ link });
    }

    onCheckboxChange = (event) => {
        let { link } = this.state;
        link.isDone = event.target.checked;

        this.setState({ link });
    }

    handleButtonSubmit = () => {
        const link = {};
        Object.assign(link, this.state.link);
        // debugger;

        this.props.addLink(link);
    }

    handleButtonClear = () => {
        const link = {
            url: '',
            description: '',
            isDone: false
        };

        this.setState({ link });
    }

    render() {
        console.log(this.state);
        return (
            <div className="add-link">

                <Button onClick={this.handleClickOpen}
                    color="primary"
                    className="add-link__button"
                >
                    Add Link
                </Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    className="add-link__dialog"
                    maxWidth="sm"
                >
                    <DialogTitle>
                        Add link
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText>
                            To add link, please enter link, description (optional) and whether you've finished processing source by this link
                        </DialogContentText>

                        <TextField
                            autoFocus={!Boolean(this.state.link.url)}
                            fullWidth
                            required
                            margin="dense"
                            label="Url"
                            type="url"
                            // helperText="YURAAAAA"
                            // error={true}
                            value={this.state.link.url}
                            onChange={this.onUrlChange}
                        />

                        <DescriptionTextField
                            value={this.state.link.description}
                            setDescription={this.setDescription}
                        />

                        <FormControlLabel control={<Checkbox checked={this.state.link.isDone} />}
                            label="Done"
                            className="add-link__dialog__done"
                            onChange={this.onCheckboxChange}
                        />

                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleButtonSubmit} color="primary">
                            Add
                        </Button>
                        <Button onClick={this.handleButtonClear} color="primary">
                            Clear
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        );
    }
}

export default AddLinkButton;
