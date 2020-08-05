import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';

import classes from './LinksListField.module.scss';
import CheckboxDisabledField from 'components/Fields/CheckboxDisabledField/CheckboxDisabledField';


class LinksListField extends Component {
    state = {
        checkedLinksIndexes: []
    }

    deleteLinks = () => {
        this.setState({ checkedLinksIndexes: [] });
        this.props.deleteLinks();
    }

    onSelectAllClick = (event) => {
        if (event.target.checked) {
            let { checkedLinksIndexes } = this.state;
            checkedLinksIndexes = [...Array(this.props.links.length).keys()];
            this.setState({ checkedLinksIndexes });

            this.props.setAllLinksChecked(true);
        } else {
            this.setState({ checkedLinksIndexes: [] });

            this.props.setAllLinksChecked(false);
        }
    };

    handleRowClick = (link, index) => {
        let { checkedLinksIndexes } = this.state;
        if (!link.checked) {
            checkedLinksIndexes.push(index);
        } else {
            checkedLinksIndexes = checkedLinksIndexes.filter(item => item !== index);
        }
        this.setState({ checkedLinksIndexes });

        this.props.setLinkChecked(index);
    }

    renderTableToolbarContent = () => {
        let content = [];

        console.log(this.state);
        const selectedNum = this.state.checkedLinksIndexes.length;
        if (selectedNum > 0) {
            content.push(
                <Typography
                    className={classes.toolbar__title}
                    color="inherit"
                    // variant="subtitle1"
                    // component="div"
                    variant="h6"
                    component="div"
                >
                    Links ({selectedNum} selected)
                </Typography>
            );
            content.push(
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon onClick={this.deleteLinks} />
                    </IconButton>
                </Tooltip>
            );
        } else {
            content.push(
                <Typography
                    className={classes.toolbar__title}
                    variant="h6"
                    component="div"
                >
                    Links
                </Typography>
            )
        }

        return content;
    }

    renderAllCheckbox = () => {
        const selectedNum = this.state.checkedLinksIndexes.length;
        const linksCount = this.props.links.length;

        return (
            <Checkbox
                indeterminate={selectedNum > 0 && selectedNum < linksCount}
                checked={linksCount > 0 && selectedNum === linksCount}
                onChange={this.onSelectAllClick}
                inputProps={{ 'aria-label': 'select all desserts' }}
            />
        );
    }

    renderTableRows = () => {
        let rows = this.props.links.map((row, index) => (
            <TableRow
                hover
                key={index}
                onClick={() => this.handleRowClick(row, index)}
                role="checkbox"
                tabIndex={-1}
                selected={row.checked}
            >
                <TableCell
                    padding="checkbox"
                    classes={{ sizeSmall: classes.cell_small }}
                >
                    <Checkbox
                        checked={row.checked}
                    />
                </TableCell>
                <TableCell align="left">{row.url}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell padding="checkbox" align="right">
                    <CheckboxDisabledField
                        checked={row.isDone}
                        label=""
                    />
                </TableCell>
            </TableRow>
        ));
        return rows;
    }

    render() {
        console.log(this.props);
        return (
            <div className={classes.links_list}>
                <Toolbar className={classes.toolbar}>
                    {this.renderTableToolbarContent()}
                </Toolbar>
                <TableContainer className={classes.links_list__container}>
                    <Table stickyHeader size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    padding="checkbox"
                                    classes={{ sizeSmall: classes.cell_small }}
                                >
                                    {this.renderAllCheckbox()}
                                </TableCell>
                                <TableCell align="left">URL</TableCell>
                                <TableCell align="left">Description</TableCell>
                                <TableCell align="left">Done</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderTableRows()}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default LinksListField;
