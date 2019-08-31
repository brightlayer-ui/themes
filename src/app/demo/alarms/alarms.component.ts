import { Component } from '@angular/core';
import * as Colors from '@pxblue/colors';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.scss']
})
export class AlarmsComponent {

    alarmHistory: AlarmHistory[] = [
        new AlarmHistory('Today', [
            new Device('Lighting - PDU 200', 'Eaton'),
            new Device('UPS 5400', 'Eaton')
        ]),
        new AlarmHistory('Past Week', [
            new Device('Lighting - PDU 400', 'Ephesus'),
            new Device('UPS 5400', 'Eaton')
        ]),
        new AlarmHistory('Last 30 Days', [
            new Device('Generator 200', 'Eaton')
        ])
    ];

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
            return Colors.red['500'];;
        }
    }
}

class SideDrawerContent {
    constructor(public data1: string, public data2: string) {}
}

class AlarmHistory {
    constructor(public time: string, public devices: Device[]) {}
}

class Device {
    constructor(public name: string, manufacturer: string) {}
}
