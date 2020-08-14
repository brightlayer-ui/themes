import React from 'react';

import Grid from '@material-ui/core/Grid';

import DashboardCard from '../components/dashboardCard';
import * as AppConstants from '../constants/appConstants';

const deviceConstants = AppConstants.dashboardData;

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{ padding: '16px' }}>
                    <Grid container spacing={3}>
                        {deviceConstants
                            .sort((a, b) => a.heroValue < b.heroValue)
                            .map((deviceOutput, index) => (
                                <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index.toString()}>
                                    <DashboardCard
                                        heroValue={deviceOutput.heroValue}
                                        loadValue={deviceOutput.loadValue}
                                        batteryPercentage={deviceOutput.battery}
                                        temperature={deviceOutput.temp}
                                        voltage={deviceOutput.voltage}
                                        current={deviceOutput.current}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}
export default Dashboard;
