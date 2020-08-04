import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import ReactPlayer from 'react-player/youtube'

import './GroupItem.scss';
import { API_URL, API_VERSION } from 'constants/index';
import CheckboxDisabledField from 'components/Fields/CheckboxDisabledField/CheckboxDisabledField';
import DeleteGroup from './DeleteGroup/DeleteGroup';
import AddLink from 'components/HomePage/CreateGroup/CreateGroupDialog/AddLink/AddLink';


class GroupItem extends Component {
    state = {
        open: false,
    }

    renderLinks = () => {
        // console.log(this.props.item.links);
        const links = this.props.item.links.map(link =>

            <div className="link-videos__card">
                <div className="link-videos__card__video">
                    <ReactPlayer url={link.url}
                        class="link-videos__card__video__embedded"
                        pip={true}
                        controls={true}
                        width='100%'
                        height='100%'
                    />
                    {/* <iframe 
                            // width="560" 
                            // height="315" 
                            // src={"https://www.youtube.com/embed/".concat(link.url.split('?v=')[1])}
                            src=""
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                            class="link-video__card__content__embedded-video">
                        </iframe> */}
                </div>
                <div className="link-videos__card__info">
                    <Typography variant="body2" color="textSecondary" component="p">
                        {link.description}
                    </Typography>

                    <Typography variant="body2"
                        color="textSecondary"
                        component="p"
                        className="link-videos__card__info__added">
                        Added {new Date(link.added).toLocaleString()}
                    </Typography>

                    <CheckboxDisabledField
                        checked={link.isDone}
                        label="done"
                    />
                </div>
            </div>
        );

        return links
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

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

        // закрий групу бо вона буде видалена
    }

    addLink = (link) => {
        console.log('Add link');
        console.log(this.props);
        console.log(link);

        axios.post(`${API_URL}/${API_VERSION}/links/`,{
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

    render() {

        return (
            <div className="group">
                <Card className="group__card">
                    <CardActionArea onClick={this.handleClickOpen}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.item.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.item.description}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Links: {this.props.item.links.length}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                    className="group-open"
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
                        <div className="link-videos">
                            {this.renderLinks()}
                        </div>
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

            </div>
        );
    }
}

export default GroupItem;