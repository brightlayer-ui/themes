// React/Material/PXBlue Basics
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
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
import { NavigationDrawer } from './router/drawer';
import { DrawerLayout } from '@pxblue/react-components';


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
export default () => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const [selectedPage, setSelectedPage] = useState(window.location.pathname.toLocaleLowerCase().substr(1).charAt(0).toUpperCase() + window.location.pathname.toLocaleLowerCase().substr(2));
    const [themeToggle, setThemeToggle] = useState(0);
    const [showWarning, setShowWarning] = useState(true);

    const classes = styles();

    return (
        <MuiThemeProvider theme={ThemeList[themeToggle].theme}>
            <CssBaseline />
            <DrawerLayout drawer={<NavigationDrawer open={drawerOpen} setOpen={() => setDrawerOpen(!drawerOpen)} onRouteChange={(route) => setSelectedPage(route.charAt(0).toUpperCase() + route.substr(1))} />} style={{minHeight: '100vh'}}>
                {showWarning && (
                    <div className={classes.notice} onClick={() => setShowWarning(false)}>
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
                            onClick={() => setShowWarning(false)}
                        >
                            <Close />
                        </IconButton>
                    </div>
                )}
                <AppBar style={{ flex: '0 0 auto' }} elevation={0} position="static" color="primary">
                    <Toolbar className={classes.toolbar}>
                        <Hidden smUp>
                            <IconButton color="inherit" onClick={() => setDrawerOpen(!drawerOpen)}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                            {selectedPage}
                        </Typography>
                        <Button variant="outlined" color="inherit" component={CompNavLink} to={'/login'}>
                            <PersonIcon style={{ marginRight: '6px' }} />
                            Log In
                        </Button>
                    </Toolbar>
                </AppBar>
                <Main />

                <Fab color="primary" className={classes.fab} variant="extended" onClick={() => setThemeToggle((themeToggle + 1) % ThemeList.length)}>
                    <FlipIcon style={{ marginRight: 5 }} />
                    Toggle Theme
                </Fab>
                <Chip
                    className={classes.themeChip}
                    label={ThemeList[themeToggle].title + ' Theme'}
                    variant="default"
                    color="default"
                />
            </DrawerLayout>
        </MuiThemeProvider>
    );
}