import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
})
export class TitleComponent implements OnInit {
    title: string;

    constructor(private route: ActivatedRoute, private dialog: MatDialog, private stateService: StateService) {}

    ngOnInit(): void {
        this.title = this.route.snapshot.data.title;
    }

    openDrawer() {
        this.stateService.setDrawerOpen(true);
    }

    openLoginDialog(): void {
        this.dialog.open(LoginDialogComponent, {
            maxHeight: 'unset',
        });
    }
}
