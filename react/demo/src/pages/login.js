import React from 'react';
// Material-UI components
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CyberSecurityBadge from '../components/cyberSecurityBadge';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
import ProductLogo from '../components/productLogo';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const styles = (theme) => ({
    card: {
        width: '600px',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'auto',
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    form: {
        maxWidth: '70%',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%',
        },
    },
    formFields: {
        marginBottom: theme.spacing(2),
        width: 'fixed',
    },
    flexrow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginBottom: theme.spacing(4),
    },
    buttonRow: {
        marginBottom: theme.spacing(2),
        flexWrap: 'nowrap',
        [theme.breakpoints.down('xs')]: {
            flexWrap: 'wrap',
            flexDirection: 'column-reverse',
            justifyContent: 'center',
        },
    },
    loginButton: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    link: {
        color: theme.palette.primary['300'],
        '&:visited': {
            color: theme.palette.primary['300'],
        },
    },
    first: {
        marginRight: theme.spacing(2),
    },
    legalText: {
        textAlign: 'center',
    },
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            remember: true,
        };
    }

    canLogIn() {
        return (
            this.validEmail(this.state.email) && this.state.email.match(EMAIL_REGEX) && this.state.password.length > 0
        );
    }
    validEmail(address) {
        return address && typeof address === 'string' && address.length > 0 && address.match(EMAIL_REGEX);
    }
    render() {
        const { classes } = this.props;

        return (
            <Dialog open={true} onClose={() => this.props.history.goBack()}>
                <Grid container alignItems="center" justify="center" className={'branding-panel'}>
                    <Paper className={classes.card}>
                        <ProductLogo />
                        <form className={classes.form}>
                            <Grid container direction="column" justify="space-between">
                                <TextField
                                    error={!this.state.email || this.validEmail(this.state.email) ? false : true}
                                    label="Email Address"
                                    className={classes.formFields}
                                    value={this.state.username}
                                    onChange={(evt) => this.setState({ email: evt.target.value })}
                                    margin="normal"
                                    required
                                    inputProps={{ maxLength: 256 }}
                                />
                                <TextField
                                    type="password"
                                    label="Password"
                                    className={classes.formFields}
                                    value={this.state.password}
                                    onChange={(evt) => this.setState({ password: evt.target.value })}
                                    margin="none"
                                    required
                                    inputProps={{ maxLength: 256 }}
                                />
                                <Grid
                                    container
                                    direction="row"
                                    alignItems="center"
                                    justify="space-between"
                                    className={classes.buttonRow}
                                >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.remember}
                                                onChange={(evt) => this.setState({ remember: evt.target.checked })}
                                            />
                                        }
                                        label="Remember me"
                                    />
                                    <Button
                                        className={classes.loginButton}
                                        variant={'contained'}
                                        color="primary"
                                        onClick={() => this.props.history.goBack()}
                                    >
                                        Log In
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                        <CyberSecurityBadge />
                    </Paper>
                </Grid>
            </Dialog>
        );
    }
}
export default withStyles(styles)(Login);
