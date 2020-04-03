import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Different App Pages/Routes
import Dashboard from '../pages/dashboard';
import Devices from '../pages/devices';
import Alarms from '../pages/alarms';
import Settings from '../pages/settings';
import Login from '../pages/login';

/*
The main page body, which contains the route definitions
*/
const Main = ({ style }) => (
    <main style={{ padding: '0px', flex: '1 1 0px' }}>
        <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/devices" component={Devices} />
            <Route exact path="/alarms" component={Alarms} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={Dashboard} />
        </Switch>
    </main>
);
export default Main;
