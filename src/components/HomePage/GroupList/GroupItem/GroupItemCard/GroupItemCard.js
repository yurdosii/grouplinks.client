import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import classes from './GroupItemCard.module.scss';


class GroupItemCard extends Component {

    componentDidMount() {
        console.log('GROUPITEMMMMM - CARD');
    }

    render() {
        return (
            <Card className={classes.card}>
                <CardActionArea onClick={this.props.handleClickOpen}>
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
        );
    }
}

export default GroupItemCard;
