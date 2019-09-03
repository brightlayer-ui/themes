import {Component} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import * as PXBColors from '@pxblue/colors';
import {DeviceList} from "./DeviceList";
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    cols = 4;
    breakpointSubscription: any;
    deviceList = DeviceList.getDevices();

    constructor(private breakpointObserver: BreakpointObserver) {

        this.breakpointSubscription = this.breakpointObserver.observe([
                '(max-width: 699.99px)',
                '(max-width: 899.99px)',
                '(max-width: 1149.99px)'])
            .subscribe(result => {
                const small = Object.keys(result.breakpoints)[0];
                const medium = Object.keys(result.breakpoints)[1];
                const large = Object.keys(result.breakpoints)[2];

                if (result.breakpoints[small]) {
                    this.cols = 1;
                } else if (result.breakpoints[medium]) {
                    this.cols = 2;
                } else if (result.breakpoints[large]) {
                    this.cols = 3;
                } else {
                    this.cols = 4;
                }
        });
    }

    interpretIcon(value) {
        if (value < 80) {
            return 'A';
        }
        if (value < 90) {
            return 'B';
        }
        return 'C';
    }

    interpretColor(value) {
        if (value < 25) {
            return PXBColors.red[500];
        }
        if (value < 70) {
            return PXBColors.yellow[500];
        }
        return PXBColors.green[500];
    }

    gradeInterpretColor(value) {
        if (value < 80) {
            return PXBColors.red[500];
        }
        if (value < 90) {
            return PXBColors.yellow[500];
        }
        return PXBColors.green[500];
    }
}
