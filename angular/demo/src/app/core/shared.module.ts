import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';
import { HeroModule, ChannelValueModule } from '@pxblue/angular-components';
import { MaterialModule } from './material.module';

@NgModule({
    exports: [
        BrowserAnimationsModule,
        BrowserModule,
        ChannelValueModule,
        FlexLayoutModule,
        FormsModule,
        HeroModule,
        NgProgressIconsModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
})
export class SharedModule { }
