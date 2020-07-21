import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { API_URL, API_VERSION } from '../../../constants';
import './CreateGroupButton.scss';
import DescriptionTextField from './DescriptionTextField/DescriptionTextField';
import NameTextField from './NameTextField/NameTextField';
import LinksListField from './LinksListField/LinksListField';
import AddLinkButton from './AddLinkButton/AddLinkButton';


class CreateGroupButton extends Component {
    state = {
        open: false,
        group: {
            name: {
                value: '',
                error: false
            },
            description: '',
            links: []
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    setName = (name, error) => {
        let { group } = this.state;
        group.name.value = name;
        group.name.error = error;

        this.setState({ group })
    }

    setDescription = (description) => {
        let { group } = this.state;
        group.description = description;

        this.setState({ group })
    }

    addLink = (link) => {
        // debugger;
        link.checked = false;

        let { group } = this.state;
        group.links = group.links.concat(link);

        this.setState({ group })
    }

    setLinkChecked = (index) => {
        let { group } = this.state;
        group.links[index].checked = !group.links[index].checked;
        this.setState({ group });
    }

    setAllLinksChecked = (checked) => {
        let { group } = this.state;
        group.links.forEach(link => link.checked = checked);
        this.setState({ group });
    }

    deleteLinks = () => {
        let { group } = this.state;
        group.links = group.links.filter(item => !item.checked);
        this.setState({group});
    }

    isGroupValid = () => {
        let valid = true;

        // check name
        if (!this.state.group.name.value || this.state.group.name.error) {
            valid = false;

            let { group } = this.state;
            group.name.error = true;
            this.setState({ group });
        }

        return valid;
    }

    clearFields = () => {
        let group = {
            name: {
                value: '',
                error: false
            },
            description: '',
            links: []
        }
        this.setState({ group });
    }

    handleButtonSubmit = () => {

        const isValid = this.isGroupValid();

        if (isValid) {
            axios.post(`${API_URL}/${API_VERSION}/groups/`, {
                name: this.state.group.name.value,
                description: this.state.group.description
            }, {
                // withCredentials: true,
            }).then(res => {
                console.log(res);

                this.state.group.links.forEach(item => {
                    axios.post(`${API_URL}/${API_VERSION}/links/`, {
                        url: item.url,
                        description: item.description,
                        is_done: item.isDone,
                        groups: [
                            res.data.id
                        ]
                    }, {
                        // withCredentials: true,
                    }).then(res => {
                        console.log(res);
                    }).catch(error => {
                        console.log(error);
                    })
                })

                this.clearFields();
                this.props.getData();

            }).catch(error => {
                console.log(error);
            })
        }
    }

    render() {
        // console.log(this.state);
        return (
            <div className="create-group">
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.handleClickOpen}
                    className="create-group__button"
                >
                    Create group
                </Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    className="create-group__dialog"
                    maxWidth="md"
                >
                    <DialogTitle>
                        Create new group
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText>
                            To create group, please enter group name, description (optional), group links (optional)
                        </DialogContentText>

                        <NameTextField
                            error={this.state.group.name.error}
                            value={this.state.group.name.value}
                            setName={this.setName}
                        />

                        <DescriptionTextField
                            value={this.state.group.description}
                            setDescription={this.setDescription}
                        />

                        <LinksListField
                            links={this.state.group.links}
                            setLinkChecked={this.setLinkChecked}
                            deleteLinks={this.deleteLinks}
                            setAllLinksChecked={this.setAllLinksChecked}
                        />

                    </DialogContent>

                    <DialogActions>

                        <AddLinkButton addLink={this.addLink} />

                        <Button onClick={this.handleButtonSubmit} color="primary">
                            Create
                        </Button>
                        {/* Create + open to create another */}

                    </DialogActions>
                </Dialog>

            </div>
        );
    }
}

export default CreateGroupButton;
