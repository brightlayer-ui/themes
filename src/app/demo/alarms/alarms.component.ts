import { Component } from '@angular/core';
import * as Colors from '@pxblue/colors';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.scss']
})
export class AlarmsComponent {

    color = Colors.red['500'];
    sideDrawerContent: SideDrawerContent[] = [
        new SideDrawerContent('Cleared', 'No'),
        new SideDrawerContent('Acknowledged', 'No'),
        new SideDrawerContent('Updates', '36'),
        new SideDrawerContent('Optimized', 'False'),
        new SideDrawerContent('Priority', 'No'),
        new SideDrawerContent('Alarm ID', '998')
    ];

    getColor(data: string): string {
        if (data === 'No') {
            return this.color;
        }
    }
}

class SideDrawerContent {
    constructor(public data1: string, public data2: string) {}
}
