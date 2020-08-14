import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Hero, HeroBanner, ChannelValue } from '@pxblue/react-components';

import * as Colors from '@pxblue/colors';
import { GradeA, GradeB, GradeC, Temp, CurrentCircled, VoltageCircled } from '@pxblue/icons-mui';
import { Pie, Battery } from '@pxblue/react-progress-icons';

const styles = (theme) => ({
    cardComponent: {
        display: 'flex',
        flexDirection: 'column',
    },
});

const channelData = [
    { icon: <Temp />, text: 'Temperature', unit: '°F' },
    { icon: <VoltageCircled />, text: 'Output Voltage', unit: 'V' },
    { icon: <CurrentCircled />, text: 'Output Current', unit: 'A' },
];

function interpretColor(value) {
    if (value < 25) {
        return Colors.red['500'];
    }
    if (value < 70) {
        return Colors.yellow['500'];
    }
    return Colors.green['500'];
}

function interpretIcon(value) {
    if (value < 80) {
        return <GradeC style={{ color: Colors.red['500'] }} fontSize={'inherit'} />;
    }
    if (value < 90) {
        return <GradeB style={{ color: Colors.yellow['500'] }} fontSize={'inherit'} />;
    }
    return <GradeA style={{ color: Colors.green['500'] }} fontSize={'inherit'} />;
}

class DashboardCard extends React.Component {
    render() {
        const { heroValue, loadValue, batteryPercentage, temperature, voltage, current, classes } = this.props;

        return (
            <React.Fragment>
                <Card className={classes.cardComponent}>
                    <List style={{ color: Colors.gray['800'], padding: 0 }}>
                        <HeroBanner divider>
                            <Hero
                                icon={interpretIcon(heroValue)}
                                label={'Grade'}
                                value={heroValue}
                                units={'/100'}
                                fontSize={'normal'}
                            />
                            <Hero
                                icon={<Pie color={interpretColor(100 - loadValue)} percent={loadValue} size={36} />}
                                label={'Load'}
                                fontSize={'normal'}
                            >
                                <ChannelValue value={loadValue} units={'%'} />
                            </Hero>
                            <Hero
                                icon={
                                    <Battery
                                        color={interpretColor(batteryPercentage)}
                                        percent={batteryPercentage}
                                        size={36}
                                    />
                                }
                                label={'Battery'}
                                fontSize={'normal'}
                            >
                                <ChannelValue value={batteryPercentage + '%'} />
                            </Hero>
                        </HeroBanner>

                        {channelData.map((channelRow, index) => (
                            <ListItem divider={index < channelData.length - 1 ? true : false} key={index}>
                                <ListItemIcon>{channelRow.icon}</ListItemIcon>
                                <ListItemText primary={channelRow.text}></ListItemText>
                                <ListItemText
                                    style={{ padding: 0, textAlign: 'right' }}
                                    primary={
                                        <ChannelValue
                                            value={
                                                (index === 0 && temperature) ||
                                                (index === 1 && voltage) ||
                                                (index === 2 && current)
                                            }
                                            units={channelRow.unit}
                                        />
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Card>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(DashboardCard);
