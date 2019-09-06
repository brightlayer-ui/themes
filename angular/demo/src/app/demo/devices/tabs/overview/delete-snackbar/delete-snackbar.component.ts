import { Component } from '@angular/core';
import {MatSnackBarRef} from '@angular/material';

@Component({
  selector: 'app-delete-snackbar',
  templateUrl: './delete-snackbar.component.html'
})
export class DeleteSnackbarComponent {
    constructor(
        public snackBarRef: MatSnackBarRef<DeleteSnackbarComponent>) {

    }
}
