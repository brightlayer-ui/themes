import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule } from '@angular/material/dialog';

@NgModule({
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatTabsModule,
        MatDialogModule,
        MatCardModule,
        MatGridListModule,
        MatExpansionModule,
        MatIconModule,
        MatSelectModule,
        MatSidenavModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatChipsModule,
        MatCheckboxModule,
        MatSliderModule,
        MatBadgeModule,
        MatMenuModule,
        MatSnackBarModule,
        MatStepperModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBottomSheetModule,
        MatTableModule,
        MatDividerModule,
    ],
    providers: [MatDialog, { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }],
})
export class MaterialModule {}
