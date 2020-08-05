import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import ReactPlayer from 'react-player/youtube'

import classes from './LinkItem.module.scss';
import CheckboxDisabledField from 'components/Fields/CheckboxDisabledField/CheckboxDisabledField';
import DeleteLink from './DeleteLink/DeleteLink';


class LinkItem extends Component {

    componentDidMount() {
        console.log('GROUPITEMMMMM - LinkItem');
    }

    render() {
        return (
            <div className={classes.card}>
                <div className={classes.video}>
                    <ReactPlayer url={this.props.link.url}
                        className={classes.video__embedded}
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

                <div className={classes.info}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.link.description}
                    </Typography>

                    <Typography variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.info__added}>
                        Added {new Date(this.props.link.added).toLocaleString()}
                    </Typography>

                    <CheckboxDisabledField
                        checked={this.props.link.isDone}
                        label="done"
                    />
                </div>

                <DeleteLink
                    deleteLink={this.props.deleteLink}
                    link={this.props.link}
                />
            </div>
        );
    }
}

export default LinkItem;
