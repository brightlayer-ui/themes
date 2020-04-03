import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

import { Device } from '@pxblue/icons-mui';

import * as AppConstants from '../constants/appConstants';

const styles = (theme) => ({
    paper: {
        width: '100%',
        maxWidth: 600,
        margin: 'auto',
        userSelect: 'none',
    },
});

const locationData = AppConstants.locationData;

class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
            moreMenuOpen: false,
            menuPosition: null,
        };
    }

    onMoreInfoClick() {
        this.setState({ drawerOpen: true, moreMenuOpen: false });
    }

    onMenuClick(event, i) {
        this.setState({ menuPosition: event.currentTarget, moreMenuOpen: true });
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div style={{ padding: '10px' }}>
                    <Typography variant="subtitle1">Locations</Typography>
                </div>

                {locationData
                    .sort((a, b) => a.location > b.location)
                    .map((dataRow, index) => (
                        <List key={index}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Badge badgeContent={dataRow.numDevices} color="primary">
                                        <Device />
                                    </Badge>
                                </ListItemAvatar>
                                <ListItemText primary={dataRow.location} />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        aria-owns={this.state.menuPosition ? 'long-menu' : null}
                                        aria-haspopup="true"
                                        onClick={(evt) => this.onMenuClick(evt)}
                                    >
                                        <MoreHoriz />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    ))}

                <Menu
                    anchorEl={this.state.menuPosition}
                    open={this.state.moreMenuOpen}
                    onClose={() => this.setState({ moreMenuOpen: false })}
                >
                    <MenuItem onClick={() => this.onMoreInfoClick()}>More information</MenuItem>
                    <MenuItem onClick={() => this.onMoreInfoClick()}>Inspect</MenuItem>
                    <MenuItem onClick={() => this.onMoreInfoClick()}>Help</MenuItem>
                </Menu>

                <Drawer
                    anchor="bottom"
                    open={this.state.drawerOpen}
                    onClose={() => this.setState({ drawerOpen: false })}
                    classes={{ paper: classes.paper }}
                >
                    <ListItem style={{ textAlign: 'center' }}>
                        <ListItemText primary="Lighting - PDU 200" secondary="ETN 42.00" />
                    </ListItem>
                    <MobileStepper
                        variant="dots"
                        steps={6}
                        position="static"
                        activeStep={0}
                        nextButton={
                            <Button size="small">
                                <KeyboardArrowRight />
                            </Button>
                        }
                        backButton={
                            <Button size="small" disabled>
                                <KeyboardArrowLeft />
                            </Button>
                        }
                    />
                </Drawer>
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(Locations);
