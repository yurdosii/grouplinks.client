import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import './GroupItem.scss';

import ReactPlayer from 'react-player/youtube'

// {/* <iframe 
//                 // width="560" 
//                 // height="315" 
//                 // src={"https://www.youtube.com/embed/".concat(item.link.split('?v=')[1])}
//                 src="https://www.youtube.com/embed/videoseries?list=PLF-NY6ldwAWqSxUpnTBObEP21cFQxNJ7C"
//                 frameborder="0" 
//                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
//                 class="embedded-video">
//             </iframe> */}

class GroupItem extends Component {
    state = {
        open: false,
    }

    renderLinks = () => {
        const links = this.props.item.links.map(item =>

            <ReactPlayer url={item.link} 
                         class="embedded-video"
                         pip={true}
            />
        );

        return links
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        // TODO Fixed card height

        return(
            <div className="item">
                <CardActionArea onClick={this.handleClickOpen}>
                    <Card>
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
                    </Card>
                </CardActionArea>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                    className="group-open"
                    maxWidth="lg"
                    fullWidth={true}
                    scroll='paper'
                >
                    <DialogTitle id="responsive-dialog-title">
                        {this.props.item.name} 
                            <Typography variant="body2" component="h3" color="textSecondary" display="inline">
                                 ({this.props.item.description})
                            </Typography>
                    </DialogTitle>
                    <DialogContent dividers={true}>
                        <div class="link-videos">
                            { this.renderLinks() }
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={this.handleClose} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        );
    }
}

export default GroupItem;
