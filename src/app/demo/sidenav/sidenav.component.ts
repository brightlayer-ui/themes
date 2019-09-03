import {ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnDestroy {

    private _mobileQueryListener: () => void;

    mobileQuery: MediaQueryList;
    hovering = false; // is the navigation menu hovered over
    hasLeft = true; // used for handling hover behavior on nav menu
    open = false; // is the nav menu open
    userMenu = false; // toggles menu mode on mobile
    goingMobile = false; // we use this to prevent the flash of mobile sidenav when making the window smaller

    constructor(
        private _navigationService: NavigationService,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => {
            if (this.mobileQuery.matches) {
                this.goingMobile = true;
            }
        };
        this.mobileQuery.addListener(this._mobileQueryListener);

        _navigationService.navToggled$.subscribe(
            value => {
                this.open = !this.open;
                changeDetectorRef.detectChanges();
            }
        );
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    toggleDesktopMenu() {
        this._navigationService.toggleMenu();
    }

    leave() {
        this.hovering = false;
        this.hasLeft = true;
    }

    enter() {
        if (this.hasLeft) {
            this.hovering = true;
        }
        this.hasLeft = false;
    }

    closeNav() {
        this.open = false;
        this.hovering = false;
        this.hasLeft = false;
    }
}
