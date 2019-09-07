import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    placeholderProductLogo: {
        height: '120px',
        width: 'auto',
        fontSize: '64px',
    }
  });

class ProductLogo extends React.Component {
    render(){
        const { classes } = this.props;
        return (
            /* PLACEHOLDER IMAGE: please use the correct company or product logo here */
            <PersonIcon color="primary" className={classes.placeholderProductLogo} />
        );
    }
}

export default withStyles( styles )( ProductLogo );