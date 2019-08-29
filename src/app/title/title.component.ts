import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from '../shared/navigation.service';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../login/login.component';

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
        this.dialog.open(LoginComponent, {
            maxHeight: 'unset'
        });
    }
}
