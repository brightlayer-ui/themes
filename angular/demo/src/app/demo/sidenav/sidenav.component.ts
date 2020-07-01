import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerNavItem } from '@pxblue/angular-components';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent {
    selectedItemId: string;
    navItems: (DrawerNavItem & { route: string })[] = [
        {
            title: 'Dashboard',
            icon: 'dashboard',
            route: '/dashboard',
        },
        {
            title: 'Devices',
            icon: 'devices',
            route: '/devices',
        },
        {
            title: 'Alarms',
            icon: 'notifications_none',
            route: '/alarms',
        },
        {
            title: 'Settings',
            icon: 'settings',
            route: '/settings',
        },
    ];

    constructor(public readonly stateService: StateService) {}

    toggleDrawer(): void {
        this.stateService.setDrawerOpen(!this.stateService.getDrawerOpen());
    }

    isOpen(): boolean {
        return this.stateService.getDrawerOpen();
    }

    setActive(id: string): void {
        this.selectedItemId = id;
    }
}
