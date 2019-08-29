import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgProgressIconsModule} from '@pxblue/ng-progress-icons';
import {HeroModule} from '@pxblue/angular-components/core/hero';
import {ChannelValueModule} from '@pxblue/angular-components/core/channel-value';
import {ContentLoaderModule} from '@netbasal/ngx-content-loader';

import {
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatChipsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSliderModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatBadgeModule,
    MatMenuModule,
    MatInputModule,
    MatStepperModule,
    MAT_DIALOG_DEFAULT_OPTIONS,
    MatDialog,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBottomSheetModule
} from '@angular/material';

import {AppComponent} from './app.component';

import {DashboardComponent} from './dashboard/dashboard.component';

import {AppRoutingModule} from './app-routing.module';
import {DevicesComponent} from './devices/devices.component';
import {NavigationService} from './shared/navigation.service';
import {AlarmsComponent} from './alarms/alarms.component';
import {SettingsComponent} from './settings/settings.component';
import {TitleComponent} from './title/title.component';
import {OverviewComponent} from './devices/tabs/overview/overview.component';
import {LocationBottomSheetExampleComponent, LocationsComponent} from './devices/tabs/locations/locations.component';
import {ReportsComponent} from './devices/tabs/reports/reports.component';
import {AddDialogComponent} from './devices/tabs/overview/add-dialog/add-dialog.component';
import { DeleteSnackbarComponent } from './devices/tabs/overview/delete-snackbar/delete-snackbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [BrowserModule,
        FlexLayoutModule,
        FormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatTabsModule,
        MatDialogModule,
        ContentLoaderModule,
        MatCardModule,
        MatGridListModule,
        MatExpansionModule,
        HeroModule,
        MatIconModule,
        HttpClientModule,
        MatSelectModule,
        MatSidenavModule,
        NgProgressIconsModule,
        ChannelValueModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatChipsModule,
        MatCheckboxModule,
        MatSliderModule,
        AppRoutingModule,
        MatBadgeModule,
        MatMenuModule,
        MatSnackBarModule,
        MatStepperModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBottomSheetModule,
        FormsModule,
        MatTableModule,
        ReactiveFormsModule],
    declarations: [AppComponent, DashboardComponent, DevicesComponent,
        AlarmsComponent, SettingsComponent, TitleComponent, OverviewComponent,
        LocationsComponent, ReportsComponent, AddDialogComponent, DeleteSnackbarComponent,
        LocationBottomSheetExampleComponent, SidenavComponent, LoginComponent, ],
    bootstrap: [AppComponent],
    providers: [NavigationService, MatDialog,
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
    entryComponents: [AddDialogComponent, DeleteSnackbarComponent, LoginComponent, LocationBottomSheetExampleComponent],
})
export class AppModule {
}
