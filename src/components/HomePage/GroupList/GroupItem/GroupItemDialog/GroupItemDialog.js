import React, { Component } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import classes from './GroupItemDialog.module.scss';
import { API_URL, API_VERSION } from 'constants/index';
import DeleteGroup from './DeleteGroup/DeleteGroup';
import AddLink from 'components/HomePage/CreateGroup/CreateGroupDialog/AddLink/AddLink';
import LinkList from './LinkList/LinkList';


class GroupItemDialog extends Component {

    deleteGroup = () => {
        axios.delete(`${API_URL}/${API_VERSION}/groups/${this.props.item.id}`, {
            withCredentials: true,
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRFToken',
        }).then(res => {
            console.log(res);

            this.handleClose();
            this.props.getData();

        }).catch(error => {
            console.log(error);
        })
    }

    addLink = (link) => {
        axios.post(`${API_URL}/${API_VERSION}/links/`, {
            url: link.url.trim(),
            description: link.description.trim(),
            isDone: link.isDone,
            group: this.props.item.id
        }, {
            withCredentials: true,
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRFToken',
        }).then(res => {
            console.log(res);
            this.props.getData();
        }).catch(error => {
            console.log(error);
        })
    }

    deleteLink = (id) => {
        axios.delete(`${API_URL}/${API_VERSION}/links/${id}`, {
            withCredentials: true,
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRFToken',
        }).then(res => {
            console.log(res);

            this.handleClose();
            this.props.getData();
        }).catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        console.log('GROUPITEMMMMM - DIALOG');
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="responsive-dialog-title"
                className={classes.groupOpen}
                maxWidth="xl"
                fullWidth={true}
                scroll='paper'
            >
                <DialogTitle id="responsive-dialog-title">
                    {this.props.item.name} {<br />}
                    <Typography variant="body2" component="h3" color="textSecondary" display="inline">
                        ({this.props.item.description})
                    </Typography>
                </DialogTitle>

                <DialogContent dividers={true}>
                    <LinkList
                        links={this.props.item.links}
                        deleteLink={this.deleteLink}
                    />
                </DialogContent>

                <DialogActions>
                    <DeleteGroup
                        deleteGroup={this.deleteGroup}
                        item={this.props.item}
                    />
                    <AddLink
                        addLink={this.addLink}
                        autoFocus
                    />
                </DialogActions>
            </Dialog>

        );
    }
}

export default GroupItemDialog;
