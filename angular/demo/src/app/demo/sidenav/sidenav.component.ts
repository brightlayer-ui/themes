import { ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { MediaMatcher } from '@angular/cdk/layout';
import {DrawerNavItem} from "@pxblue/angular-components";
import {StateService} from "../../services/state.service";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent {


    navItems: (DrawerNavItem & { route: string })[]  = [
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

    selectedItemId: string;

    constructor(
        public readonly stateService: StateService,
        private _navigationService: NavigationService,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher
    ) {
        _navigationService.navToggled$.subscribe((value) => {
            this.stateService.setDrawerOpen(false);
            changeDetectorRef.detectChanges();
        });
    }

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
