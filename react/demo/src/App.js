// React/Material/PXBlue Basics
import { NavLink } from 'react-router-dom';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Material-UI Components
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Material-UI Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import BoltIcon from '@material-ui/icons/OfflineBolt';
import AlarmsIcon from '@material-ui/icons/NotificationImportant';
import FlipIcon from '@material-ui/icons/FlipToBack';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import Close from '@material-ui/icons/Close';

// PX Blue Icons
import { Device } from '@pxblue/icons-mui';

// Main routing controller
import Main from './router/main';

// Additional styling elements
import styles from './styles/styleClasses';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as PXBThemes from '@pxblue/react-themes';
import './style.css';

// NavLink for components in app (Button, Nav Drawer, etc.)
const CompNavLink = React.forwardRef((props, ref) => <NavLink {...props} innerRef={ref} />);

//Add new themes here to add as toggle option
const ThemeList = [
    { title: 'Blue', theme: createMuiTheme(PXBThemes.blue) },
    { title: 'Blue Dark', theme: createMuiTheme(PXBThemes.blueDark) },
];

/*
The container for the entire app, including the common side-navigation panel and the main body panel.
*/
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showUserMenu: false,
            drawerOpen: false,
            drawerHover: false,
            selectedPage: 'Dashboard',
            themeToggle: 0,
            showWarning: true,
        };
    }

    toggleDrawer() {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

    toggleNavMenu() {
        this.setState({ showUserMenu: !this.state.showUserMenu });
    }

    toggleTheme() {
        this.setState({ themeToggle: (this.state.themeToggle + 1) % ThemeList.length });
    }

    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={ThemeList[this.state.themeToggle].theme}>
                <CssBaseline />
                <Hidden smUp>{this.getMobileNavigationMenu()}</Hidden>
                <Hidden xsDown>{this.getDesktopNavigationMenu()}</Hidden>

                <div
                    style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    className={this.state.drawerOpen ? classes.drawerMarginFull : classes.drawerMargin}
                >
                    {this.state.showWarning && (
                        <div className={classes.notice} onClick={() => this.setState({ showWarning: false })}>
                            <Typography variant="h5" style={{ marginBottom: 5 }}>
                                THEME DEMO ONLY
                            </Typography>
                            <Typography variant="body2">
                                This example is intended to demonstrate the effects of different PX Blue themes on
                                various components. The data, icons, behaviors, etc. are not representative of a
                                production application and many areas of the demo are non-functional/non-interactive.
                            </Typography>
                            <IconButton
                                style={{ position: 'absolute', top: 5, right: 5, color: 'white' }}
                                onClick={() => this.setState({ showWarning: false })}
                            >
                                <Close />
                            </IconButton>
                        </div>
                    )}
                    <AppBar style={{ flex: '0 0 auto' }} elevation={0} position="static" color="primary">
                        <Toolbar className={classes.toolbar}>
                            <Hidden smUp>
                                <IconButton color="inherit" onClick={() => this.toggleDrawer()}>
                                    <MenuIcon />
                                </IconButton>
                            </Hidden>
                            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                                {this.state.selectedPage}
                            </Typography>
                            <Button variant="outlined" color="inherit" component={CompNavLink} to={'/login'}>
                                <PersonIcon style={{ marginRight: '6px' }} />
                                Log In
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Main />
                </div>

                <Fab color="primary" className={classes.fab} variant="extended" onClick={() => this.toggleTheme()}>
                    <FlipIcon style={{ marginRight: 5 }} />
                    Toggle Theme
                </Fab>
                <Chip
                    className={classes.themeChip}
                    label={ThemeList[this.state.themeToggle].title + ' Theme'}
                    variant="default"
                    color="default"
                />
            </MuiThemeProvider>
        );
    }

    /*
  The functions below have been used to abstract various pieces of the navigation
  menu. This allows them to be shared between the mobile size navigation and the 
  desktop size.
  */

    // returns the navigation drawer used at mobile resolution
    getDesktopNavigationMenu() {
        const { classes } = this.props;
        return (
            <Drawer variant="permanent" open={true} onClose={() => this.toggleDrawer()}>
                <div
                    className={
                        this.state.drawerHover
                            ? classes.drawerWidthFull
                            : this.state.drawerOpen
                            ? classes.drawerWidthFull
                            : classes.drawerWidthCollapsed
                    }
                    style={{
                        height: '100%',
                        overflowX: 'hidden',
                    }}
                >
                    <Toolbar className={classes.flush + ' ' + classes.drawerWidthFull}>
                        <IconButton onClick={() => this.toggleDrawer()}>
                            <MenuIcon />
                        </IconButton>
                        {(this.state.drawerOpen || this.state.drawerHover) && (
                            <Typography variant="subtitle1">PX Blue Themes Example</Typography>
                        )}
                    </Toolbar>
                    <Divider />
                    <div
                        className={classes.drawerWidthFull}
                        style={{
                            flex: '1 1 0px',
                            overflowY: 'auto',
                            overflowX: 'hidden',
                        }}
                        onMouseEnter={() => {
                            this.hoverDelay = setTimeout(() => this.setState({ drawerHover: true }), 500);
                        }}
                        onMouseLeave={() => {
                            clearTimeout(this.hoverDelay);
                            this.setState({ drawerHover: false });
                        }}
                    >
                        {this.getPrimaryNavigation()}
                        <div style={{ flex: '1 1 0px' }} />
                    </div>
                </div>
            </Drawer>
        );
    }

    getMobileNavigationMenu() {
        const { classes } = this.props;
        return (
            <Drawer
                open={this.state.drawerOpen}
                onClose={() => this.toggleDrawer()}
                classes={{ paper: classes.drawer }}
            >
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                >
                    {this.getUserDetails()}
                    <div style={{ flex: '1 1 0px', overflowY: 'auto' }}>
                        {this.getPrimaryNavigation()}
                        <div style={{ flex: '1 1 0px' }} />
                    </div>
                </div>
            </Drawer>
        );
    }

    // returns the layout for the panel of main application pages
    getPrimaryNavigation() {
        return (
            <List>
                {this.NavigationListItem({
                    title: 'Dashboard',
                    route: '/dashboard',
                    icon: <DashboardIcon />,
                })}
                {this.NavigationListItem({
                    title: 'Devices',
                    route: '/devices',
                    icon: <Device />,
                })}
                {this.NavigationListItem({
                    title: 'Alarms',
                    route: '/alarms',
                    icon: <AlarmsIcon />,
                })}
                {this.NavigationListItem({
                    title: 'Settings',
                    route: '/settings',
                    icon: <SettingsIcon />,
                })}
            </List>
        );
    }

    // returns the layout for the user details panel (mobile-only)
    getUserDetails() {
        const { classes } = this.props;
        return (
            <div className={classes.header}>
                <BoltIcon style={{ fontSize: '64px', transform: 'rotate(42deg)' }} />

                <div
                    style={{
                        width: '100%',
                    }}
                    onClick={() => this.toggleNavMenu()}
                >
                    <Typography variant="subtitle1" color="inherit" style={{ lineHeight: '1.5rem' }}>
                        PX Blue
                    </Typography>
                    <div>
                        <Typography variant="subtitle1" color="inherit" style={{ lineHeight: '1rem' }}>
                            Themes Example
                        </Typography>
                        <div style={{ flex: '1 1 0px' }} />
                    </div>
                </div>
            </div>
        );
    }

    NavigationListItem({ title, route, icon }) {
        const { classes } = this.props;
        const open = this.state.drawerHover || this.state.drawerOpen;
        const action = () => this.setState({ drawerOpen: false, drawerHover: false, selectedPage: title });
        return (
            <ListItem
                className={classes.listItem + ' ' + (open ? classes.open : '')}
                component={CompNavLink}
                to={route}
                activeClassName={'routeActive'}
                onClick={() => action()}
            >
                <ListItemIcon className={classes.listIcon}>{icon}</ListItemIcon>
                <ListItemText inset className={classes.listItemText} primary={title} />
            </ListItem>
        );
    }
}
export default withStyles(styles)(App);
