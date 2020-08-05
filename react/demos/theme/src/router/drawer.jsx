import { Menu } from '@material-ui/icons';
import { useMediaQuery } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AlarmsIcon from '@material-ui/icons/NotificationImportant';
import SettingsIcon from '@material-ui/icons/Settings';
import { Device } from '@pxblue/icons-mui';

import { Drawer, DrawerBody, DrawerNavGroup, DrawerHeader } from '@pxblue/react-components';
import { useCallback } from 'react';

export const NavigationDrawer = (props) => {
    const { open, setOpen, onRouteChange } = props;
    const [activeRoute, setActiveRoute] = useState(window.location.pathname.toLocaleLowerCase().substr(1));
    const theme = useTheme();
    const history = useHistory();
    const xsDown = useMediaQuery(theme.breakpoints.down('xs'));

    const navigate = useCallback(
        (route) => {
            history.push(route);
            setActiveRoute(route);
            if (xsDown) setOpen(false);
            onRouteChange(route);
        },
        [history, setActiveRoute, xsDown, onRouteChange, setOpen]
    );

    return (
        <Drawer
            open={open}
            width={300}
            ModalProps={{
                onBackdropClick: () => setOpen(!open),
            }}
            activeItem={activeRoute}
            variant={xsDown ? 'temporary' : 'persistent'}
        >
            <DrawerHeader
                title={'PX Blue'}
                subtitle={'React Themes Example'}
                backgroundColor={Colors.blue[500]}
                fontColor={Colors.white[50]}
                icon={<Menu />}
                onIconClick={() => setOpen(!open)}
            />
            <DrawerBody>
                <DrawerNavGroup
                    items={[
                        {
                            title: 'Dashboard',
                            itemID: 'dashboard',
                            icon: <DashboardIcon />,
                            onClick: () => navigate('dashboard'),
                        },
                        {
                            title: 'Devices',
                            itemID: 'devices',
                            icon: <Device />,
                            onClick: () => navigate('devices'),
                        },
                        {
                            title: 'Alarms',
                            itemID: 'alarms',
                            icon: <AlarmsIcon />,
                            onClick: () => navigate('alarms'),
                        },
                        {
                            title: 'Settings',
                            itemID: 'settings',
                            icon: <SettingsIcon />,
                            onClick: () => navigate('settings'),
                        },
                    ]}
                />
            </DrawerBody>
        </Drawer>
    );
};
