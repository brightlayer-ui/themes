import {Component} from '@angular/core';
import {AddDialogComponent} from './add-dialog/add-dialog.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DeleteSnackbarComponent} from './delete-snackbar/delete-snackbar.component';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

    constructor(private dialog: MatDialog,
                private snackbar: MatSnackBar) {}

    displayedColumns: string[] = ['checkbox', 'name', 'manufacturer', 'networkId', 'location', 'dateAdded'];

    dataSource: OverviewTableElement[] = [
        {name: 'Lighting - PDU 200', manufacturer: 'Eaton', networkId: 'ETN 42.00', location: 'Pittsburgh, PA', dateAdded: '01.01.2019'},
        {name: 'UPS 3400', manufacturer: 'Eaton', networkId: 'ETN Test 0.200', location: 'Cleveland, OH', dateAdded: '01.01.2019'},
        {name: 'Lighting - PDU 400', manufacturer: 'Ephesus', networkId: 'LAB 0.800', location: 'Pittsburgh, PA', dateAdded: '01.01.2019'},
        {name: 'UPS 5400', manufacturer: 'Eaton', networkId: 'LAB 0.800', location: 'Pittsburgh, PA', dateAdded: '01.01.2019'},
        {name: 'Generator 200', manufacturer: 'Eaton', networkId: 'ETN TEST 0.200', location: 'Cleveland, OH', dateAdded: '01.01.2019'}
    ];

    openAddDialog(): void {
        this.dialog.open(AddDialogComponent, {
            width: '400px',
        });
    }

    openSnackbar(): void {
        this.snackbar.openFromComponent(DeleteSnackbarComponent, {duration: 600000});
    }
}

interface OverviewTableElement {
    name: string;
    manufacturer: string;
    networkId: string;
    location: string;
    dateAdded: string;
}
