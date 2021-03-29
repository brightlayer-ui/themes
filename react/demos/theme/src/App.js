// React/Material/PXBlue Basics
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

// Material-UI Components
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
    Switch,
    ListItemAvatar,
    Dialog,
    DialogTitle,
    ButtonGroup,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Slider,
    Tabs,
    Tab,
    Badge,
    BottomNavigation,
    BottomNavigationAction,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Paper,
    InputAdornment,
    Snackbar,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    MobileStepper,
    TableRow,
    TableSortLabel,
    LinearProgress,
    CircularProgress,
} from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

// Material-UI Icons
import FlipIcon from '@material-ui/icons/FlipToBack';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import Close from '@material-ui/icons/Close';

// Main routing controller
import Main from './router/main';
import { NavigationDrawer } from './router/drawer';
import { DrawerLayout } from '@pxblue/react-components';
import {
    Add as AddIcon,
    FavoriteBorder,
    Favorite,
    Done as DoneIcon,
    FormatAlignCenter,
    FormatAlignJustify,
    FormatAlignLeft,
    FormatAlignRight,
    CheckBox as CheckBoxIcon,
    CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
    Mail as MailIcon,
    Restore,
    LocationOn,
    Inbox as InboxIcon,
    Drafts as DraftsIcon,
    KeyboardArrowRight,
    KeyboardArrowLeft,
    Visibility,
    VisibilityOff,
} from '@material-ui/icons';

// Additional styling elements
import styles from './styles/styleClasses';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as PXBThemes from '@pxblue/react-themes';
import './style.css';
import { Avatar, TextField } from '@material-ui/core';

import avatar from './assets/images/1.jpg';

// NavLink for components in app (Button, Nav Drawer, etc.)
const CompNavLink = React.forwardRef((props, ref) => <NavLink {...props} innerRef={ref} />);

//Add new themes here to add as toggle option
const ThemeList = [
    { title: 'Blue', theme: createMuiTheme(PXBThemes.blue) },
    { title: 'Blue Dark', theme: createMuiTheme(PXBThemes.blueDark) },
];

const withIcons = {
    InputProps: {
        endAdornment: (
            <InputAdornment position="end">
                <IconButton edge={'end'}>
                    <VisibilityOff />
                </IconButton>
            </InputAdornment>
        ),
        startAdornment: (
            <InputAdornment position={'start'}>
                <IconButton edge={'start'}>
                    <Visibility />
                </IconButton>
            </InputAdornment>
        ),
    },
};

/*
The container for the entire app, including the common side-navigation panel and the main body panel.
*/
export default () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState(
        window.location.pathname.toLocaleLowerCase().substr(1).charAt(0).toUpperCase() +
            window.location.pathname.toLocaleLowerCase().substr(2)
    );
    const [themeToggle, setThemeToggle] = useState(0);
    const [showWarning, setShowWarning] = useState(true);
    const [buttonColor, setButtonColor] = useState('default');
    const [showInputIcons, setShowInputIcons] = useState(false);
    const [showInputValues, setShowInputValues] = useState(false);

    const classes = styles();

    return (
        <MuiThemeProvider theme={ThemeList[themeToggle].theme}>
            <CssBaseline />
            <DrawerLayout
                drawer={
                    <NavigationDrawer
                        open={drawerOpen}
                        setOpen={() => setDrawerOpen(!drawerOpen)}
                        onRouteChange={(route) => setSelectedPage(route.charAt(0).toUpperCase() + route.substr(1))}
                    />
                }
                style={{ minHeight: '100vh' }}
            >
                {/* {showWarning && (
                    <div className={classes.notice} onClick={() => setShowWarning(false)}>
                        <Typography variant="h5" style={{ marginBottom: 5 }}>
                            THEME DEMO ONLY
                        </Typography>
                        <Typography variant="body2">
                            This example is intended to demonstrate the effects of different PX Blue themes on various
                            components. The data, icons, behaviors, etc. are not representative of a production
                            application and many areas of the demo are non-functional/non-interactive.
                        </Typography>
                        <IconButton
                            style={{ position: 'absolute', top: 5, right: 5, color: 'white' }}
                            onClick={() => setShowWarning(false)}
                        >
                            <Close />
                        </IconButton>
                    </div>
                )} */}
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
                        <Button
                            variant="outlined"
                            color="inherit"
                            component={CompNavLink}
                            to={'/login'}
                            startIcon={<PersonIcon />}
                        >
                            Log In
                        </Button>
                    </Toolbar>
                </AppBar>
                <AppBar style={{ flex: '0 0 auto' }} elevation={0} position="static" color="secondary">
                    <Toolbar className={classes.toolbar}>
                        <Hidden smUp>
                            <IconButton color="inherit" onClick={() => setDrawerOpen(!drawerOpen)}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                            {selectedPage}
                        </Typography>
                        <Button
                            variant="outlined"
                            color="inherit"
                            component={CompNavLink}
                            to={'/login'}
                            startIcon={<PersonIcon />}
                        >
                            Log In
                        </Button>
                    </Toolbar>
                </AppBar>
                <AppBar style={{ flex: '0 0 auto' }} elevation={0} position="static" color="secondary">
                    <Tabs value={3} textColor={'primary'}>
                        <Tab label="Item One" value={2} />
                        <Tab label="Item Two" value={3} />
                        <Tab label="Item Three" value={1} />
                    </Tabs>
                </AppBar>
                <AppBar style={{ flex: '0 0 auto' }} elevation={0} position="static" color="secondary">
                    <Tabs value={3} textColor={'secondary'}>
                        <Tab label="Item One" value={2} />
                        <Tab label="Item Two" value={3} />
                        <Tab label="Item Three" value={1} />
                    </Tabs>
                </AppBar>
                <AppBar style={{ flex: '0 0 auto' }} elevation={0} position="static" color="secondary">
                    <Tabs value={3}>
                        <Tab label="Item One" value={2} icon={<MailIcon />} />
                        <Tab label="Item Two" value={3} />
                        <Tab label="Item Three" value={1} />
                    </Tabs>
                </AppBar>
                <AppBar style={{ flex: '0 0 auto' }} elevation={0} position="static">
                    <Toolbar className={classes.toolbar}>
                        <Hidden smUp>
                            <IconButton color="inherit" onClick={() => setDrawerOpen(!drawerOpen)}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                            {selectedPage}
                        </Typography>
                        <Button
                            variant="outlined"
                            color="inherit"
                            component={CompNavLink}
                            to={'/login'}
                            startIcon={<PersonIcon />}
                        >
                            Log In
                        </Button>
                    </Toolbar>
                </AppBar>
                <div>
                    <Badge badgeContent={4} color="primary">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </div>
                <div>
                    <IconButton color={'default'}>
                        <MailIcon />
                    </IconButton>
                    <IconButton color={'primary'}>
                        <MailIcon />
                    </IconButton>
                    <IconButton color={'secondary'}>
                        <MailIcon />
                    </IconButton>
                    <IconButton color={'default'} disabled>
                        <MailIcon />
                    </IconButton>
                    <IconButton color={'primary'} disabled>
                        <MailIcon />
                    </IconButton>
                    <IconButton color={'secondary'} disabled>
                        <MailIcon />
                    </IconButton>
                </div>
                <Slider marks={true} />
                <Slider marks={true} color={'primary'} />
                <Slider marks={true} color={'secondary'} />
                <div style={{ margin: 30 }}>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        open={true}
                        // autoHideDuration={6000}
                        // onClose={handleClose}
                        message="Note archived"
                        action={
                            <React.Fragment>
                                <Button color="primary" size="small">
                                    UNDO
                                </Button>
                                <IconButton size="small" aria-label="close" color="inherit">
                                    <Close fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                    />
                </div>
                <div style={{ margin: 40 }}>
                    <LinearProgress style={{ marginBottom: 10 }} />
                    <LinearProgress color="secondary" style={{ marginBottom: 10 }} />
                    <LinearProgress variant={'determinate'} value={50} style={{ marginBottom: 10 }} />
                    <LinearProgress variant={'determinate'} value={50} color="secondary" style={{ marginBottom: 10 }} />
                    <LinearProgress variant={'buffer'} value={50} valueBuffer={75} style={{ marginBottom: 10 }} />
                    <LinearProgress
                        variant={'buffer'}
                        value={50}
                        color="secondary"
                        valueBuffer={75}
                        style={{ marginBottom: 10 }}
                    />
                    <CircularProgress />
                    <CircularProgress color={'secondary'} />
                </div>
                {/* <Dialog open={true}>
                    <DialogTitle >Set backup account</DialogTitle>
                    <List>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar>
                                        <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={'Hello World'} />
                            </ListItem>

                        <ListItem autoFocus button onClick={() => {}}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AddIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Add account" />
                        </ListItem>
                    </List>
                </Dialog> */}
                <div style={{ margin: 30 }}>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox name="checkedA" />} label="Secondary" />
                        <FormControlLabel control={<Checkbox name="checkedB" color="primary" />} label="Primary" />
                        <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
                        <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
                        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
                        <FormControlLabel control={<Checkbox name="checkedF" indeterminate />} label="Indeterminate" />
                        <FormControlLabel control={<Checkbox name="checkedG" />} label="Custom color" />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                            label="Custom icon"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    name="checkedI"
                                />
                            }
                            label="Custom size"
                        />
                    </FormGroup>
                </div>
                <div style={{ margin: 20 }}>
                    <Switch name="checkedA" />
                    <Switch color="primary" name="checkedB" />
                    <Switch />
                    <Switch disabled />
                    <Switch disabled checked />
                    <Switch defaultChecked color="default" />
                </div>
                <div style={{ margin: 40 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Chip label="Basic" color={'default'} className={classes.margins} />
                            <Chip label="Disabled" color={'default'} disabled className={classes.margins} />
                            <br />
                            <Chip label="Clickable" color={'default'} clickable className={classes.margins} />
                            <Chip label="Disabled" color={'default'} clickable disabled className={classes.margins} />
                            <br />
                            <Chip
                                label="Deletable"
                                color={'default'}
                                clickable
                                onDelete={() => {}}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'default'}
                                clickable
                                onDelete={() => {}}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="With Icon"
                                color={'default'}
                                clickable
                                icon={<Favorite />}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'default'}
                                clickable
                                icon={<Favorite />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="Dual Icon"
                                color={'default'}
                                clickable
                                onDelete={() => {}}
                                icon={<Favorite />}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'default'}
                                clickable
                                onDelete={() => {}}
                                icon={<Favorite />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="Text Avatar"
                                color={'default'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'default'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="Image Avatar"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="Deletable Avatar"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                onDelete={() => {}}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                onDelete={() => {}}
                                disabled
                                className={classes.margins}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Chip label="Primary" color={'primary'} />
                            <Chip label="Disabled" color={'primary'} disabled className={classes.margins} />
                            <br />
                            <Chip label="Clickable" color={'primary'} clickable className={classes.margins} />
                            <Chip label="Disabled" color={'primary'} clickable disabled className={classes.margins} />
                            <br />
                            <Chip
                                label="Deletable"
                                color={'primary'}
                                clickable
                                onDelete={() => {}}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'primary'}
                                clickable
                                onDelete={() => {}}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="With Icon"
                                color={'primary'}
                                clickable
                                icon={<Favorite />}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'primary'}
                                clickable
                                icon={<Favorite />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="Dual Icon"
                                color={'primary'}
                                clickable
                                onDelete={() => {}}
                                icon={<Favorite />}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'primary'}
                                clickable
                                onDelete={() => {}}
                                icon={<Favorite />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="Text Avatar"
                                color={'primary'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'primary'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="Image Avatar"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="Deletable Avatar"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                onDelete={() => {}}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                onDelete={() => {}}
                                disabled
                                className={classes.margins}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Chip label="Secondary" color={'secondary'} className={classes.margins} />
                            <Chip label="Disabled" color={'secondary'} disabled className={classes.margins} />
                            <br />
                            <Chip label="Clickable" color={'secondary'} clickable className={classes.margins} />
                            <Chip label="Disabled" color={'secondary'} clickable disabled className={classes.margins} />
                            <br />
                            <Chip
                                label="Deletable"
                                color={'secondary'}
                                clickable
                                onDelete={() => {}}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                onDelete={() => {}}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="With Icon"
                                color={'secondary'}
                                clickable
                                icon={<Favorite />}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                icon={<Favorite />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="Dual Icon"
                                color={'secondary'}
                                clickable
                                onDelete={() => {}}
                                icon={<Favorite />}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                onDelete={() => {}}
                                icon={<Favorite />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="Text Avatar"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="Image Avatar"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                label="Deletable Avatar"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                onDelete={() => {}}
                                className={classes.margins}
                            />
                            <Chip
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                onDelete={() => {}}
                                disabled
                                className={classes.margins}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Chip variant={'outlined'} label="Basic" color={'default'} className={classes.margins} />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'default'}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Clickable"
                                color={'default'}
                                clickable
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'default'}
                                clickable
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Deletable"
                                color={'default'}
                                clickable
                                onDelete={() => {}}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'default'}
                                clickable
                                onDelete={() => {}}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="With Icon"
                                color={'default'}
                                clickable
                                icon={<Favorite />}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'default'}
                                clickable
                                icon={<Favorite />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Dual Icon"
                                color={'default'}
                                clickable
                                onDelete={() => {}}
                                icon={<Favorite />}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'default'}
                                clickable
                                onDelete={() => {}}
                                icon={<Favorite />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Text Avatar"
                                color={'default'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'default'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Image Avatar"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Deletable Avatar"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                onDelete={() => {}}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'default'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                onDelete={() => {}}
                                disabled
                                className={classes.margins}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Chip variant={'outlined'} label="Primary" color={'primary'} className={classes.margins} />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'primary'}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Clickable"
                                color={'primary'}
                                clickable
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'primary'}
                                clickable
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Deletable"
                                color={'primary'}
                                clickable
                                onDelete={() => {}}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'primary'}
                                clickable
                                onDelete={() => {}}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="With Icon"
                                color={'primary'}
                                clickable
                                icon={<Favorite />}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'primary'}
                                clickable
                                icon={<Favorite />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Dual Icon"
                                color={'primary'}
                                clickable
                                onDelete={() => {}}
                                icon={<Favorite />}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'primary'}
                                clickable
                                onDelete={() => {}}
                                icon={<Favorite />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Text Avatar"
                                color={'primary'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'primary'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Image Avatar"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Deletable Avatar"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                onDelete={() => {}}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'primary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                onDelete={() => {}}
                                disabled
                                className={classes.margins}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Chip
                                variant={'outlined'}
                                label="Secondary"
                                color={'secondary'}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'secondary'}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Clickable"
                                color={'secondary'}
                                clickable
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Deletable"
                                color={'secondary'}
                                clickable
                                onDelete={() => {}}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                onDelete={() => {}}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="With Icon"
                                color={'secondary'}
                                clickable
                                icon={<Favorite />}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                icon={<Favorite />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Dual Icon"
                                color={'secondary'}
                                clickable
                                onDelete={() => {}}
                                icon={<Favorite />}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                onDelete={() => {}}
                                icon={<Favorite />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Text Avatar"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar>MB</Avatar>}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Image Avatar"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                disabled
                                className={classes.margins}
                            />
                            <br />
                            <Chip
                                variant={'outlined'}
                                label="Deletable Avatar"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                onDelete={() => {}}
                                className={classes.margins}
                            />
                            <Chip
                                variant={'outlined'}
                                label="Disabled"
                                color={'secondary'}
                                clickable
                                avatar={<Avatar alt="Natacha" src={avatar} />}
                                onDelete={() => {}}
                                disabled
                                className={classes.margins}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Avatar color={'primary'}>JB</Avatar>
                    <Avatar color={'primary'}>JB</Avatar>
                    <Avatar color={'secondary'}>JB</Avatar>
                    <Avatar color={'error'}>JB</Avatar>
                </div>
                <div style={{ margin: 20 }}>
                    <Fab aria-label="add">
                        <MailIcon />
                    </Fab>
                    <Fab color="primary" aria-label="add">
                        <MailIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="edit">
                        <MailIcon />
                    </Fab>
                    <Fab variant="extended">
                        <MailIcon />
                        Navigate
                    </Fab>
                    <Fab disabled aria-label="like">
                        <Favorite />
                    </Fab>
                </div>
                <div>
                    <BottomNavigation value={2} showLabels>
                        <BottomNavigationAction label="Recents" icon={<Restore />} />
                        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
                    </BottomNavigation>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Paper>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItem>
                        </List>
                        <Divider />

                        <List component="nav" aria-label="secondary mailbox folders">
                            <ListItem>
                                <ListItemText primary="Trash" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Spam" />
                            </ListItem>
                        </List>
                    </Paper>
                </div>
                <div style={{ margin: 20 }}>
                    <ToggleButtonGroup value={'left'} exclusive>
                        <ToggleButton value="left" aria-label="left aligned">
                            <FormatAlignLeft />
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered">
                            <FormatAlignCenter />
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned">
                            <FormatAlignRight />
                        </ToggleButton>
                        <ToggleButton value="justify" aria-label="justified" disabled>
                            <FormatAlignJustify />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div style={{ margin: 20 }}>
                    <ToggleButtonGroup value={'left'} exclusive orientation={'vertical'}>
                        <ToggleButton value="left" aria-label="left aligned">
                            <FormatAlignLeft />
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered">
                            <FormatAlignCenter />
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned">
                            <FormatAlignRight />
                        </ToggleButton>
                        <ToggleButton value="justify" aria-label="justified" disabled>
                            <FormatAlignJustify />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div>
                    <ButtonGroup>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup variant="contained">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup variant="text">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <br />
                    <ButtonGroup color="primary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup variant="contained" color="primary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup variant="text" color="primary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <br />
                    <ButtonGroup color="secondary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup variant="contained" color="secondary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup variant="text" color="secondary">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <br />
                    <ButtonGroup disabled>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup variant="contained" disabled>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup variant="text" disabled>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <br />
                    <ButtonGroup color="primary" disabled>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup variant="contained" color="primary" disabled>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup variant="text" color="primary" disabled>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <br />
                    <ButtonGroup color="secondary" disabled>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup variant="contained" color="secondary" disabled>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                    <ButtonGroup variant="text" color="secondary" disabled>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <br />
                </div>
                <div style={{ margin: 20 }}>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox />} label="Secondary" />
                        <FormControlLabel control={<Checkbox name="checkedB" color="primary" />} label="Primary" />
                        <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
                        <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
                        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
                        <FormControlLabel control={<Checkbox name="checkedF" indeterminate />} label="Indeterminate" />
                        <FormControlLabel control={<Checkbox name="checkedG" />} label="Custom color" />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                            label="Custom icon"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    name="checkedI"
                                />
                            }
                            label="Custom size"
                        />
                    </FormGroup>
                </div>
                <Slider color={'primary'} />
                <Slider color={'secondary'} />

                <div style={{ margin: 20 }}>
                    <Typography variant={'h6'} color={'error'}>
                        Here is typography
                    </Typography>
                    <br />
                    <Typography variant={'h6'} color={'inherit'}>
                        Here is typography
                    </Typography>
                    <br />
                    <Typography variant={'h6'} color={'initial'}>
                        Here is typography
                    </Typography>
                    <br />
                    <Typography variant={'h6'} color={'primary'}>
                        Here is typography
                    </Typography>
                    <br />
                    <Typography variant={'h6'} color={'secondary'}>
                        Here is typography
                    </Typography>
                    <br />
                    <Typography variant={'h6'} color={'textPrimary'}>
                        Here is typography
                    </Typography>
                    <br />
                    <Typography variant={'h6'} color={'textSecondary'}>
                        Here is typography
                    </Typography>
                    <br />
                </div>
                <Button onClick={() => setShowInputIcons(!showInputIcons)}>Toggle Icons</Button>
                <Button onClick={() => setShowInputValues(!showInputValues)}>Toggle Values</Button>
                <div style={{ margin: 20 }}>
                    <TextField
                        label={'Default'}
                        placeholder={'test'}
                        helperText={'helper text'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        label={'Default disabled'}
                        value={showInputValues ? 234 : ''}
                        placeholder={'test'}
                        disabled
                        helperText={'helper text'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        label={'Default error'}
                        placeholder={'test'}
                        error
                        helperText={'there is an error'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <br />
                    <TextField
                        label={'D. primary'}
                        color={'primary'}
                        placeholder={'test'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        label={'D. primary disabled'}
                        value={showInputValues ? 234 : ''}
                        color={'primary'}
                        placeholder={'test'}
                        disabled
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        label={'D. primary error'}
                        value={showInputValues ? 234 : ''}
                        color={'primary'}
                        placeholder={'test'}
                        error
                        helperText={'there is an error'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <br />
                    <TextField
                        label={'D. secondary'}
                        value={showInputValues ? 234 : ''}
                        color={'secondary'}
                        placeholder={'test'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        label={'D. secondary dis.'}
                        value={showInputValues ? 234 : ''}
                        color={'secondary'}
                        placeholder={'test'}
                        disabled
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        label={'D. secondary error'}
                        value={showInputValues ? 234 : ''}
                        color={'secondary'}
                        placeholder={'test'}
                        error
                        helperText={'there is an error'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <br />
                    <br />
                    <TextField
                        variant={'outlined'}
                        label={'Outlined'}
                        placeholder={'test'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        variant={'outlined'}
                        value={showInputValues ? 234 : ''}
                        label={'Outlined disabled'}
                        placeholder={'test'}
                        disabled
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        variant={'outlined'}
                        value={showInputValues ? 234 : ''}
                        label={'Outlined error'}
                        placeholder={'test'}
                        error
                        helperText={'there is an error'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <br />
                    <TextField
                        variant={'outlined'}
                        label={'Out. primary'}
                        color={'primary'}
                        placeholder={'test'}
                        helperText={'Helper text'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        variant={'outlined'}
                        value={showInputValues ? 234 : ''}
                        label={'Out. primary disabled'}
                        color={'primary'}
                        placeholder={'test'}
                        disabled
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        variant={'outlined'}
                        value={showInputValues ? 234 : ''}
                        label={'Out. primary error'}
                        color={'primary'}
                        placeholder={'test'}
                        error
                        helperText={'there is an error'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <br />
                    <TextField
                        variant={'outlined'}
                        value={showInputValues ? 234 : ''}
                        label={'Out. secondary'}
                        color={'secondary'}
                        placeholder={'test'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        variant={'outlined'}
                        value={showInputValues ? 234 : ''}
                        label={'Out. secondary dis.'}
                        color={'secondary'}
                        placeholder={'test'}
                        disabled
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        variant={'outlined'}
                        value={showInputValues ? 234 : ''}
                        label={'Out. secondary error'}
                        color={'secondary'}
                        placeholder={'test'}
                        error
                        helperText={'there is an error'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <br />
                    <br />
                    <TextField
                        variant={'filled'}
                        helperText={'a helper text'}
                        label={'Filled'}
                        placeholder={'test'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        variant={'filled'}
                        value={showInputValues ? 234 : ''}
                        label={'Filled disabled'}
                        placeholder={'test'}
                        disabled
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        variant={'filled'}
                        value={showInputValues ? 234 : ''}
                        label={'Filled error'}
                        placeholder={'test'}
                        error
                        helperText={'there is an error'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <br />
                    <TextField
                        variant={'filled'}
                        label={'Fil. primary'}
                        color={'primary'}
                        placeholder={'test'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        variant={'filled'}
                        value={showInputValues ? 234 : ''}
                        label={'Fil. primary disabled'}
                        color={'primary'}
                        placeholder={'test'}
                        disabled
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        variant={'filled'}
                        value={showInputValues ? 234 : ''}
                        label={'Fil. primary error'}
                        color={'primary'}
                        placeholder={'test'}
                        error
                        helperText={'there is an error'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <br />
                    <TextField
                        variant={'filled'}
                        value={showInputValues ? 234 : ''}
                        label={'Fil. secondary'}
                        color={'secondary'}
                        placeholder={'test'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        variant={'filled'}
                        value={showInputValues ? 234 : ''}
                        label={'Fil. secondary dis.'}
                        color={'secondary'}
                        placeholder={'test'}
                        disabled
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                    <TextField
                        variant={'filled'}
                        value={showInputValues ? 234 : ''}
                        label={'Fil. secondary error'}
                        color={'secondary'}
                        placeholder={'test'}
                        error
                        helperText={'there is an error'}
                        {...(showInputIcons ? withIcons : {})}
                    ></TextField>
                </div>
                <div style={{ margin: 20 }}>
                    {/* <Button onClick={() => setButtonColor('default')}>Default</Button>
                    <Button onClick={() => setButtonColor('primary')}>Primary</Button>
                    <Button onClick={() => setButtonColor('secondary')}>Secondary</Button> */}
                    <Typography>Default Buttons</Typography>
                    <Table style={{ width: 400 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>State</TableCell>
                                <TableCell>Default</TableCell>
                                <TableCell>Contained</TableCell>
                                <TableCell>Flat</TableCell>
                                <TableCell>Outlined</TableCell>
                                <TableCell>Text</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell padding="checkbox">NORMAL</TableCell>
                                <TableCell>
                                    <Button color={'default'}>Hello</Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'default'} variant={'contained'}>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'default'} variant={'contained'} disableElevation>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'default'} variant={'outlined'}>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'default'} variant={'text'}>
                                        Hello
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell padding="checkbox">DISABLED</TableCell>
                                <TableCell>
                                    <Button color={'default'} disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'default'} variant={'contained'} disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'default'} variant={'contained'} disabled disableElevation>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'default'} variant={'outlined'} disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'default'} variant={'text'} disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Typography>Primary Buttons</Typography>
                    <Table style={{ width: 400 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>State</TableCell>
                                <TableCell>Default</TableCell>
                                <TableCell>Contained</TableCell>
                                <TableCell>Flat</TableCell>
                                <TableCell>Outlined</TableCell>
                                <TableCell>Text</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell padding="checkbox">NORMAL</TableCell>
                                <TableCell>
                                    <Button color={'primary'}>Hello</Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'primary'} variant={'contained'}>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'primary'} variant={'contained'} disableElevation>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'primary'} variant={'outlined'}>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'primary'} variant={'text'}>
                                        Hello
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell padding="checkbox">DISABLED</TableCell>
                                <TableCell>
                                    <Button color={'primary'} disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'primary'} variant={'contained'} disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'primary'} variant={'contained'} disableElevation disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'primary'} variant={'outlined'} disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'primary'} variant={'text'} disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Typography>Secondary Buttons</Typography>
                    <Table style={{ width: 400 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>State</TableCell>
                                <TableCell>Default</TableCell>
                                <TableCell>Contained</TableCell>
                                <TableCell>Flat</TableCell>
                                <TableCell>Outlined</TableCell>
                                <TableCell>Text</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell padding="checkbox">NORMAL</TableCell>
                                <TableCell>
                                    <Button color={'secondary'}>Hello</Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'secondary'} variant={'contained'}>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'secondary'} variant={'contained'} disableElevation>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'secondary'} variant={'outlined'}>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'secondary'} variant={'text'}>
                                        Hello
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell padding="checkbox">DISABLED</TableCell>
                                <TableCell>
                                    <Button color={'secondary'} disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'secondary'} variant={'contained'} disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'secondary'} variant={'contained'} disableElevation disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'secondary'} variant={'outlined'} disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button color={'secondary'} variant={'text'} disabled>
                                        Hello
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    {/* <Button>Hello</Button>
                    <br />
                    <Button color={'default'}>Hello</Button>
                    <br />
                    <Button color={'primary'}>Hello</Button>
                    <br />
                    <Button color={'secondary'}>Hello</Button>
                    <br />
                    <br />
                    <Button variant={'contained'}>Hello</Button>
                    <br />
                    <Button variant={'contained'} color={'default'}>
                        Hello
                    </Button>
                    <br />
                    <Button variant={'contained'} color={'primary'}>
                        Hello
                    </Button>
                    <br />
                    <Button variant={'contained'} color={'secondary'}>
                        Hello
                    </Button>
                    <br />
                    <br />
                    <Button variant={'outlined'}>Hello</Button>
                    <br />
                    <Button variant={'outlined'} color={'default'}>
                        Hello
                    </Button>
                    <br />
                    <Button variant={'outlined'} color={'primary'}>
                        Hello
                    </Button>
                    <br />
                    <Button variant={'outlined'} color={'secondary'}>
                        Hello
                    </Button>
                    <br />
                    <br />
                    <Button variant={'text'}>Hello</Button>
                    <br />
                    <Button variant={'text'} color={'default'}>
                        Hello
                    </Button>
                    <br />
                    <Button variant={'text'} color={'primary'}>
                        Hello
                    </Button>
                    <br />
                    <Button variant={'text'} color={'secondary'}>
                        Hello
                    </Button>
                    <br />
                    <br />
                    <br />
                    <Button disabled>Hello</Button>
                    <br />
                    <Button disabled color={'default'}>
                        Hello
                    </Button>
                    <br />
                    <Button disabled color={'primary'}>
                        Hello
                    </Button>
                    <br />
                    <Button disabled color={'secondary'}>
                        Hello
                    </Button>
                    <br />
                    <br />
                    <Button disabled variant={'contained'}>
                        Hello
                    </Button>
                    <br />
                    <Button disabled variant={'contained'} color={'default'}>
                        Hello
                    </Button>
                    <br />
                    <Button disabled variant={'contained'} color={'primary'}>
                        Hello
                    </Button>
                    <br />
                    <Button disabled variant={'contained'} color={'secondary'}>
                        Hello
                    </Button>
                    <br />
                    <br />
                    <Button disabled variant={'outlined'}>
                        Hello
                    </Button>
                    <br />
                    <Button disabled variant={'outlined'} color={'default'}>
                        Hello
                    </Button>
                    <br />
                    <Button disabled variant={'outlined'} color={'primary'}>
                        Hello
                    </Button>
                    <br />
                    <Button disabled variant={'outlined'} color={'secondary'}>
                        Hello
                    </Button>
                    <br />
                    <br />
                    <Button disabled variant={'text'}>
                        Hello
                    </Button>
                    <br />
                    <Button disabled variant={'text'} color={'default'}>
                        Hello
                    </Button>
                    <br />
                    <Button disabled variant={'text'} color={'primary'}>
                        Hello
                    </Button>
                    <br />
                    <Button disabled variant={'text'} color={'secondary'}>
                        Hello
                    </Button>
                    <br /> */}
                </div>
                <div style={{ margin: 30 }}>
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
                </div>
                <Fab
                    color="primary"
                    className={classes.fab}
                    variant="extended"
                    onClick={() => setThemeToggle((themeToggle + 1) % ThemeList.length)}
                >
                    <FlipIcon style={{ marginRight: 5 }} />
                    Toggle Theme
                </Fab>
                <Chip
                    className={classes.themeChip}
                    label={ThemeList[themeToggle].title + ' Theme'}
                    variant="default"
                    color="default"
                />
                <Main />
                <div style={{ height: 500 }} />
            </DrawerLayout>
        </MuiThemeProvider>
    );
};
