import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

const EMAIL_REGEX =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-login',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private fb: FormBuilder,
                public dialogRef: MatDialogRef<LoginDialogComponent>) {

    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
            password: ['', Validators.compose([Validators.required])],
            remember: [true]
        });
    }

    login(): void {
        this.dialogRef.close();
    }
}
