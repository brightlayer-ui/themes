import { Component, OnInit, Renderer2 } from '@angular/core';
import { DrawerLayoutVariantType } from '@pxblue/angular-components';
import { StateService } from './services/state.service';
import { ViewportService } from './services/viewport.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    showNotice = true;
    variant: DrawerLayoutVariantType = 'persistent';

    currentTheme: Theme;
    themes = [new Theme('pxb-blue', 'Blue Theme'), new Theme('pxb-blue-dark', 'Blue Dark Theme')];

    constructor(
        private renderer: Renderer2,
        private readonly viewportService: ViewportService,
        public readonly stateService: StateService
    ) {}

    ngOnInit(): void {
        this.applyTheme(this.themes[0]);
    }

    getVariant(): DrawerLayoutVariantType {
        if (this.variant === 'persistent' && this.viewportService.isSmall()) {
            this.stateService.setDrawerOpen(false);
        } else if (this.variant === 'temporary' && !this.viewportService.isSmall()) {
            this.stateService.setDrawerOpen(false);
        }

        this.variant = this.viewportService.isSmall() ? 'temporary' : 'persistent';
        return this.variant;
    }

    toggleTheme() {
        let themeIndex = 0;
        for (let theme of this.themes) {
            themeIndex++;
            if (theme === this.currentTheme) {
                break;
            }
        }

        if (themeIndex === this.themes.length) {
            themeIndex = 0;
        }

        this.removeTheme(this.currentTheme);
        this.applyTheme(this.themes[themeIndex]);
    }

    private applyTheme(theme: Theme): void {
        this.renderer.addClass(document.body, theme.className);
        this.currentTheme = theme;
    }

    private removeTheme(theme: Theme): void {
        this.renderer.removeClass(document.body, theme.className);
        this.currentTheme = undefined;
    }
}

class Theme {
    constructor(public className: string, public themeName: string) {}
}
