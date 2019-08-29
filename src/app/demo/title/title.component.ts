import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from '../../services/navigation.service';
import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

    title: string;

    constructor(private route: ActivatedRoute,
                private dialog: MatDialog,
                private navigationService: NavigationService) { }

    ngOnInit(): void {
        this.title = this.route.snapshot.data.title;
    }

    onMenuClicked() {
        this.navigationService.toggleMenu();
    }

    openLoginDialog(): void {
        this.dialog.open(LoginDialogComponent, {
            maxHeight: 'unset'
        });
    }
}
