import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DevicesComponent } from './devices/devices.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './devices/tabs/reports/reports.component';
import { LocationBottomSheetExampleComponent, LocationsComponent } from './devices/tabs/locations/locations.component';
import { TitleComponent } from './title/title.component';
import { AddDialogComponent } from './devices/tabs/overview/add-dialog/add-dialog.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OverviewComponent } from './devices/tabs/overview/overview.component';
import { DeleteSnackbarComponent } from './devices/tabs/overview/delete-snackbar/delete-snackbar.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../core/shared.module';
import { NavigationService } from '../services/navigation.service';
import {DrawerModule} from "@pxblue/angular-components";

@NgModule({
    imports: [AppRoutingModule, SharedModule, DrawerModule],
    declarations: [
        AddDialogComponent,
        AlarmsComponent,
        DeleteSnackbarComponent,
        DashboardComponent,
        DevicesComponent,
        LocationsComponent,
        LocationBottomSheetExampleComponent,
        LoginDialogComponent,
        OverviewComponent,
        ReportsComponent,
        SidenavComponent,
        SettingsComponent,
        TitleComponent,
    ],
    entryComponents: [
        AddDialogComponent,
        DeleteSnackbarComponent,
        LocationBottomSheetExampleComponent,
        LoginDialogComponent,
    ],
    providers: [NavigationService],
    exports: [SidenavComponent],
})
export class DemoModule {}
