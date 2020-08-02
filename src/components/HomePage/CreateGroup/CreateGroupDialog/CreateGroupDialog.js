import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './CreateGroupDialog.scss';
import { API_URL, API_VERSION } from 'constants/index';
import DescriptionTextField from 'components/Fields/DescriptionTextField/DescriptionTextField';
import NameTextField from 'components/Fields/NameTextField/NameTextField';
import LinksListField from './LinksListField/LinksListField';
import AddLink from './AddLink/AddLink';


class CreateGroupDialog extends Component {
    state = {
        group: {
            name: {
                value: '',
                error: false
            },
            description: '',
            links: []
        }
    }

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
        this.setState({ group });
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
                name: this.state.group.name.value.trim(),
                description: this.state.group.description.trim()
            }, {
                withCredentials: true,
                xsrfCookieName: 'csrftoken',
                xsrfHeaderName: 'X-CSRFToken',
            }).then(res => {
                console.log(res);

                this.state.group.links.forEach(item => {
                    axios.post(`${API_URL}/${API_VERSION}/links/`, {
                        url: item.url,
                        description: item.description.trim(),
                        isDone: item.isDone,
                        groups: [
                            res.data.id
                        ]
                    }, {
                        withCredentials: true,
                        xsrfCookieName: 'csrftoken',
                        xsrfHeaderName: 'X-CSRFToken',
                    }).then(res => {
                        console.log(res);
                    }).catch(error => {
                        console.log(error);
                    })
                });

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
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                className="dialog"
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
                    <AddLink
                        addLink={this.addLink}
                    />

                    <Button
                        onClick={this.handleButtonSubmit}
                        color="primary"
                    >
                        Create
                    </Button>
                    {/* Create + open to create another */}
                </DialogActions>
            </Dialog>
        );
    }
}

export default CreateGroupDialog;
