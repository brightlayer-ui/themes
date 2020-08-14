import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import * as Colors from '@pxblue/colors';

import * as AppConstants from '../constants/appConstants';

const alarmsData = AppConstants.alarmsData;
const timeRanges = AppConstants.timeRanges;

const styles = (theme) => ({
    paper: {
        width: '325px',
        position: 'relative',
        height: '100%',
    },
    dataList: {
        width: 'width: 100%',
    },
    priorityAlarmData: {
        color: Colors.red['500'],
    },
    toggleIcon: {
        verticalAlign: 'text-bottom',
    },
    contentArea: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
});

class Alarms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseOpen: [true, true, true],
        };
    }

    toggleCollapse(timePeriodIndex) {
        let hidden = this.state.collapseOpen;
        hidden[timePeriodIndex] = !this.state.collapseOpen[timePeriodIndex];
        this.setState({ collapseOpen: hidden });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.contentArea}>
                <div style={{ flex: '1 1 0px', padding: '20px' }}>
                    {timeRanges.map((timePeriod, index) => (
                        <React.Fragment key={timePeriod.period}>
                            <ListItem button onClick={() => this.toggleCollapse(index)}>
                                <ListItemText
                                    primary={timePeriod.period}
                                    primaryTypographyProps={{ variant: 'subtitle1' }}
                                />
                                {this.state.collapseOpen[index] ? (
                                    <ExpandLess className={classes.toggleIcon} />
                                ) : (
                                    <ExpandMore className={classes.toggleIcon} />
                                )}
                            </ListItem>
                            <Divider />
                            <Collapse in={this.state.collapseOpen[index]} timeout="auto">
                                <List dense={true} className={classes.dataList}>
                                    {timePeriod.data
                                        .sort((a, b) => a.name > b.name)
                                        .map((row) => (
                                            <ListItem key={row.name}>
                                                <Checkbox />
                                                <ListItemText primary={row.name} secondary={row.manufacturer} />
                                                <ListItemSecondaryAction>
                                                    <Button variant="outlined" color="primary">
                                                        Acknowledge
                                                    </Button>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        ))}
                                </List>
                            </Collapse>
                        </React.Fragment>
                    ))}
                </div>

                <Drawer
                    anchor="right"
                    variant="permanent"
                    open={true}
                    classes={{ paper: classes.paper }}
                    style={{ flex: '0 0 auto' }}
                >
                    <Toolbar style={{ display: 'inline', paddingTop: '10px' }}>
                        <ListItemText primary={'Lighting - PDU 100'} secondary={'Device 360'} style={{ padding: 0 }} />
                    </Toolbar>
                    <List dense={false}>
                        <Divider />
                        {alarmsData.map((dataPoint) => (
                            <React.Fragment key={dataPoint.title}>
                                <ListItem>
                                    <ListItemText primary={dataPoint.title} />
                                    <ListItemText
                                        primary={dataPoint.value}
                                        style={{ textAlign: 'right' }}
                                        className={dataPoint.value === 'No' ? classes.priorityAlarmData : null}
                                    />
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                </Drawer>
            </div>
        );
    }
}
export default withStyles(styles)(Alarms);
