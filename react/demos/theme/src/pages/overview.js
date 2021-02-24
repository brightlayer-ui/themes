import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

import AddIcon from '@material-ui/icons/AddCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';

import * as AppConstants from '../constants/appConstants';
import { TableSortLabel } from '@material-ui/core';

const styles = (theme) => ({
    inputField: {
        width: '90%',
        maxWidth: '400px',
    },
    locDropdown: {
        display: 'block',
        marginTop: '15px',
    },
});

const rows = AppConstants.deviceData;

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            snackbarOpen: false,
        };
    }

    handleClickAdd = () => {
        this.setState({ dialogOpen: true });
    };

    handleDialogClose = () => {
        this.setState({ dialogOpen: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div style={{ padding: '16px' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginRight: '16px' }}
                        onClick={this.handleClickAdd}
                    >
                        <AddIcon style={{ marginRight: '6px' }} />
                        Add
                    </Button>
                    <Button variant="outlined" color="primary" onClick={() => this.setState({ snackbarOpen: true })}>
                        <DeleteIcon style={{ marginRight: '6px' }} />
                        Delete
                    </Button>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>
                                    <TableSortLabel active={false} direction={'asc'}>
                                        Name
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="right">
                                    <TableSortLabel active={true} direction={'desc'}>
                                        Manufacturer
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="right">Network ID</TableCell>
                                <TableCell align="right">Location</TableCell>
                                <TableCell align="right">Date Added</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .sort((a, b) => a.name > b.name)
                                .map((row) => (
                                    <TableRow hover key={row.name} selected={Math.random() < 0.3}>
                                        <TableCell padding="checkbox">
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.manufacturer}</TableCell>
                                        <TableCell align="right">{row.networkID}</TableCell>
                                        <TableCell align="right">{row.location}</TableCell>
                                        <TableCell align="right">{row.dateAdded}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </div>

                <Dialog open={this.state.dialogOpen} onClose={this.handleDialogClose}>
                    <DialogTitle>Add new device</DialogTitle>
                    <DialogContent style={{ paddingBottom: '40px' }}>
                        <TextField required label="Device name" margin="normal" className={classes.inputField} />
                        <TextField required error label="Network ID" margin="normal" className={classes.inputField} />
                        <FormControl className={classes.locDropdown}>
                            <InputLabel>Location</InputLabel>
                            <Select value={'CLE'}>
                                <MenuItem value={'CLE'}>Cleveland</MenuItem>
                                <MenuItem value={'PIT'}>Pittsburgh</MenuItem>
                                <MenuItem value={'IRE'}>Ireland</MenuItem>
                                <MenuItem value={'OTH'}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDialogClose} variant="contained">
                            Close
                        </Button>
                        <Button onClick={this.handleDialogClose} color="primary" variant="contained">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={true}
                    autoHideDuration={6000}
                    onClose={() => this.setState({ snackbarOpen: false })}
                    message={<span>Devices Deleted</span>}
                    action={[
                        <Button
                            key="undo"
                            color="secondary"
                            size="small"
                            onClick={() => this.setState({ snackbarOpen: false })}
                        >
                            Undo
                        </Button>,
                        <IconButton key="close" color="inherit" onClick={() => this.setState({ snackbarOpen: false })}>
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(Overview);
