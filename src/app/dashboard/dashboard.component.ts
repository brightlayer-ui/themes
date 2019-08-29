import { Component, OnDestroy, ChangeDetectorRef , OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import * as PXBColors from '@pxblue/colors';
import {NavigationService} from '../shared/navigation.service';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: any;
  cols = 4;
  breakpointSubscription: any;
  deviceList = [];


  constructor(
    private domSanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver,
    changeDetectorRef: ChangeDetectorRef,
    private _navigationService: NavigationService,
    private route: ActivatedRoute
   ) {



      this.breakpointSubscription = this.breakpointObserver.observe([ '(max-width: 599.99px)', '(max-width: 959.99px)']).subscribe(result => {
        const small = Object.keys(result.breakpoints)[0];
        const medium = Object.keys(result.breakpoints)[1];

        if (result.breakpoints[small]) { this.cols = 1; } else if (result.breakpoints[medium]) { this.cols = 2; } else { this.cols = 4; }
      });

    }

    onMenuClicked() {
    this._navigationService.toggleMenu();
  }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    this.refreshData();
  }

  interpretIcon(value) {
    if (value < 80) {
      return  'A';
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
    return  PXBColors.green[500];
  }

     gradeInterpretColor(value) {
    if (value < 80) {
      return PXBColors.red[500];
    }
    if (value < 90) {
      return PXBColors.yellow[500];
    }
    return  PXBColors.green[500];
  }

  refreshData() {


     this.deviceList =   [{
          heroValue: 0,
          loadValue: 20,
          battery: 12,
          channels: [{
              icon: 'wb_sunny',
              label: 'Temperature',
              value: 68,
              unit: '°F'
            },
            {
              icon: 'brightness_high',
              label: 'Output Voltage',
              value: 480,
              unit: 'V'
            },
            {
              icon: 'wb_incandescent',
              label: 'Output Current',
              value: 15,
              unit: 'A'
            }
          ]
      },
      {
          heroValue: 100,
          loadValue: 33,
          battery: 52,
          channels: [{
              icon: 'wb_sunny',
              label: 'Temperature',
              value: 68,
              unit: '°F'
            },
            {
              icon: 'brightness_high',
              label: 'Output Voltage',
              value: 480,
              unit: 'V'
            },
            {
              icon: 'wb_incandescent',
              label: 'Output Current',
              value: 15,
              unit: 'A'
            }
          ]

      },
      {
          heroValue: 72,
          loadValue: 98,
          battery: 98,
          channels: [{
              icon: 'wb_sunny',
              label: 'Temperature',
              value: 50,
              unit: '°F'
            },
            {
              icon: 'brightness_high',
              label: 'Output Voltage',
              value: 680,
              unit: 'V'
            },
            {
              icon: 'wb_incandescent',
              label: 'Output Current',
              value: 13,
              unit: 'A'
            }
          ]
      }, {

          heroValue: 54,
          loadValue: 73,
          battery: 22,
          channels: [{
              icon: 'wb_sunny',
              label: 'Temperature',
              value: 78,
              unit: '°F'
            },
            {
              icon: 'brightness_high',
              label: 'Output Voltage',
              value: 250,
              unit: 'V'
            },
            {
              icon: 'wb_incandescent',
              label: 'Output Current',
              value: 20,
              unit: 'A'
            }
          ]

      },
       {

          heroValue: 54,
          loadValue: 73,
          battery: 22,
          channels: [{
              icon: 'wb_sunny',
              label: 'Temperature',
              value: 78,
              unit: '°F'
            },
            {
              icon: 'brightness_high',
              label: 'Output Voltage',
              value: 250,
              unit: 'V'
            },
            {
              icon: 'wb_incandescent',
              label: 'Output Current',
              value: 20,
              unit: 'A'
            }
          ]

      },
       {

          heroValue: 54,
          loadValue: 73,
          battery: 22,
          channels: [{
              icon: 'wb_sunny',
              label: 'Temperature',
              value: 78,
              unit: '°F'
            },
            {
              icon: 'brightness_high',
              label: 'Output Voltage',
              value: 250,
              unit: 'V'
            },
            {
              icon: 'wb_incandescent',
              label: 'Output Current',
              value: 20,
              unit: 'A'
            }
          ]

      },
       {

          heroValue: 54,
          loadValue: 73,
          battery: 22,
          channels: [{
              icon: 'wb_sunny',
              label: 'Temperature',
              value: 78,
              unit: '°F'
            },
            {
              icon: 'brightness_high',
              label: 'Output Voltage',
              value: 250,
              unit: 'V'
            },
            {
              icon: 'wb_incandescent',
              label: 'Output Current',
              value: 20,
              unit: 'A'
            }
          ]

      },
       {

          heroValue: 54,
          loadValue: 73,
          battery: 22,
          channels: [{
              icon: 'wb_sunny',
              label: 'Temperature',
              value: 78,
              unit: '°F'
            },
            {
              icon: 'brightness_high',
              label: 'Output Voltage',
              value: 250,
              unit: 'V'
            },
            {
              icon: 'wb_incandescent',
              label: 'Output Current',
              value: 20,
              unit: 'A'
            }
          ]

      },
       {

          heroValue: 54,
          loadValue: 73,
          battery: 22,
          channels: [{
              icon: 'wb_sunny',
              label: 'Temperature',
              value: 78,
              unit: '°F'
            },
            {
              icon: 'brightness_high',
              label: 'Output Voltage',
              value: 250,
              unit: 'V'
            },
            {
              icon: 'wb_incandescent',
              label: 'Output Current',
              value: 20,
              unit: 'A'
            }
          ]

      },
    ];

  }

}
