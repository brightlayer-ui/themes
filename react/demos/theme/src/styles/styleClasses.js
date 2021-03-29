import * as Colors from '@pxblue/colors';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    '@keyframes slideIn': {
        '0%': {
            transform: 'translate(-100%, -50%)',
        },
        '70%': {
            transform: 'translate(10%, -50%)',
        },
        '100%': {
            transform: 'translate(0%, -50%)',
        },
    },
    fab: {
        bottom: 60,
        right: 20,
        width: '190px',
        position: 'fixed',
        height: '50px',
        borderRadius: 2,
        zIndex: 2000,
    },
    themeChip: {
        bottom: 24,
        right: 20,
        position: 'fixed',
        width: '190px',
        zIndex: 2000,
        borderRadius: 2,
    },
    toolbar: {
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 0,
        },
        paddingLeft: theme.spacing(2),
    },
    notice: {
        padding: '75px 25px',
        color: Colors.white['500'],
        backgroundColor: Colors.blue['500'] + 'F5',
        textAlign: 'center',
        position: 'fixed',
        zIndex: 10000,
        left: 0,
        top: '50%',
        transform: 'translate(-100%, -50%)',
        width: '100%',
        animation: `$slideIn 1200ms ${theme.transitions.easing.easeInOut} 1000ms`,
        animationFillMode: 'forwards',
    },
    subheader: {
        paddingLeft: '15px',
        paddingRight: '15px',
    },
    margins: {
        margin: theme.spacing(0.5),
    },
}));
export default styles;
