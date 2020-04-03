import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
    selector: 'app-locations',
    templateUrl: './locations.component.html',
})
export class LocationsComponent {
    constructor(private _bottomSheet: MatBottomSheet) {}

    locationData = [
        { location: 'Pittsburgh, PA', numDevices: 4 },
        { location: 'Cleveland, OH', numDevices: 2 },
        { location: 'Dublin, Ireland', numDevices: 6 },
        { location: 'Raleigh, NC', numDevices: 3 },
        { location: 'Houston, TX', numDevices: 0 },
    ];

    openBottomSheet(): void {
        this._bottomSheet.open(LocationBottomSheetExampleComponent);
    }
}

@Component({
    selector: 'app-location-bottom-sheet',
    template: `<mat-nav-list>
        <mat-list-item (click)="openLink($event)" style="text-align:center">
            <span mat-line>Lighting - PDU 200</span>
            <span mat-line>ETN 42.00</span>
        </mat-list-item>
    </mat-nav-list>`,
})
export class LocationBottomSheetExampleComponent {
    constructor(private _bottomSheetRef: MatBottomSheetRef<LocationBottomSheetExampleComponent>) {}

    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
