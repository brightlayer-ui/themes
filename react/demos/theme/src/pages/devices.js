import React from 'react';

import ReportsPage from './reports';
import LocationsPage from './locations';
import OverviewPage from './overview';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Devices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabSelected: 0,
        };
    }

    handleTabChange = (event, value) => {
        this.setState({ tabSelected: value });
    };

    render() {
        return (
            <React.Fragment>
                <AppBar position="static" elevation={0} color={'secondary'}>
                    <Tabs value={this.state.tabSelected} onChange={this.handleTabChange}>
                        <Tab label="Overview" />
                        <Tab label="Locations" />
                        <Tab label="Reports" />
                    </Tabs>
                </AppBar>
                {this.state.tabSelected === 0 && <OverviewPage />}
                {this.state.tabSelected === 1 && <LocationsPage />}
                {this.state.tabSelected === 2 && <ReportsPage />}
            </React.Fragment>
        );
    }
}
export default Devices;
