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
import classes from './AddLinkDialog.module.scss';


class AddLinkDialog extends Component {
    state = {
        link: {
            url: '',
            description: '',
            isDone: false
        }
    }

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
        link.checked = false;
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
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                // className={classes.dialog}
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
                        InputProps={{
                            className: classes.url_field_input
                        }}
                        InputLabelProps={{
                            classes: {
                                focused: classes.url_field_label__focused
                            }
                        }}
                    />

                    <DescriptionTextField
                        value={this.state.link.description}
                        setDescription={this.setDescription}
                    />

                    <FormControlLabel control={<Checkbox checked={this.state.link.isDone} />}
                        label="Done"
                        className={classes.checkbox__done}
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
        );
    }
}

export default AddLinkDialog;
