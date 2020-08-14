import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import BoltIcon from '@material-ui/icons/OfflineBolt';

import { withStyles } from '@material-ui/core/styles';
const styles = (theme) => ({
    placeholderProductLogo: {
        width: 'auto',
        fontSize: '64px',
        transform: 'rotate(42deg)',
    },
    link: {
        color: theme.palette.primary['300'],
        '&:visited': {
            color: theme.palette.primary['300'],
        },
    },
    placeholderCyberSecurityLogo: {
        marginBottom: theme.spacing(2),
        height: '60px',
        width: '60px',
    },
});

class CyberSecurityBadge extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div style={{ textAlign: 'center' }}>
                {/* PLACEHOLDER IMAGE: please use the correct cybersecurity certification logo here */}
                <BoltIcon color="primary" className={classes.placeholderProductLogo} />
                <Typography variant="body2" color={'inherit'}>
                    {this.props.legalText}
                    <br />
                    <a className={classes.link} href="/dashboard">
                        Terms and Conditions
                    </a>{' '}
                    and{' '}
                    <a className={classes.link} href="/dashboard">
                        Privacy Policy
                    </a>
                </Typography>
            </div>
        );
    }
}

CyberSecurityBadge.propTypes = {
    legalText: PropTypes.string,
};
CyberSecurityBadge.defaultProps = {
    legalText: 'By logging in, you agree to our ',
};

export default withStyles(styles)(CyberSecurityBadge);
