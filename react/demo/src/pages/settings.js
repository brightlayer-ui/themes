import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    secondaryHeading: {
        color: theme.palette.text.secondary,
        flex: 1,
    },
    chip: {
        margin: '5px',
    },
    panelCard: {
        paddingTop: '16px',
        margin: 'auto',
        width: '90%',
        maxWidth: '800px',
    },
});

class Settings extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.panelCard}>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle2" color="inherit">
                            {' '}
                            Turn on notifications{' '}
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ alignItems: 'center' }}>
                        <Typography className={classes.secondaryHeading} variant="subtitle2">
                            Turn on device alarm notifications
                        </Typography>
                        <Switch color="primary" />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle2" color="inherit">
                            Hide low priority alarms
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ alignItems: 'center' }}>
                        <Typography className={classes.secondaryHeading} variant="subtitle2">
                            Hide all low priority device alarm notifications
                        </Typography>
                        <Checkbox />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle2" color="inherit">
                            Set screen brightness
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ paddingRight: '15px' }}>
                        <Slider defaultValue={50} min={0} max={100} valueLabelDisplay="auto" />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle2" color="inherit">
                            Set display density
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ padding: '20px' }}>
                        <Chip clickable size="small" label="Default" color="primary" className={classes.chip} />
                        <Chip clickable size="small" label="Comfortable" className={classes.chip} />
                        <Chip clickable size="small" label="Compact" className={classes.chip} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}
export default withStyles(styles)(Settings);
