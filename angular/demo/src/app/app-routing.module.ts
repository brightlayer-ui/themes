import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './demo/dashboard/dashboard.component';
import { DevicesComponent } from './demo/devices/devices.component';
import { AlarmsComponent } from './demo/alarms/alarms.component';
import { SettingsComponent } from './demo/settings/settings.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard' },
    },
    {
        path: 'devices',
        component: DevicesComponent,
        data: { title: 'Devices' },
    },
    {
        path: 'alarms',
        component: AlarmsComponent,
        data: { title: 'Alarms' },
    },
    {
        path: 'settings',
        component: SettingsComponent,
        data: { title: 'Settings' },
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
