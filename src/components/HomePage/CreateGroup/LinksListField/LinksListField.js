import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './LinksListField.scss';

import CheckboxDisabledField from 'components/Fields/CheckboxDisabledField/CheckboxDisabledField';


class LinksListField extends Component {

    renderTableRows = () => {
        let body = this.props.links.map((row) => (
            <TableRow key={row.id}>
                <TableCell align="left">{row.url}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="right">
                    <CheckboxDisabledField
                        checked={row.isDone}
                        label=""
                    />
                </TableCell>
            </TableRow>
        ));
        return body;
    }

    render() {
        return (
            <div className="links-list">
                <div className="links-list__title">
                    Links
                </div>
                <div className="links-list__links">
                    <TableContainer component={Paper} className="links-list__links__container">
                        <Table stickyHeader size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">URL</TableCell>
                                    <TableCell align="left">Description</TableCell>
                                    <TableCell align="right">Is done</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.renderTableRows()}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    }
}

export default LinksListField;
