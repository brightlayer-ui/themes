import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    showNotice = true;

    themeIndex = 0;
    themes = ['pxb-blue', 'pxb-blue-dark'];

    constructor(private renderer: Renderer2) {}

    ngOnInit(): void {
        this.applyTheme(this.themes[0]);
    }

    toggleTheme() {
        const currentTheme = this.themes[this.themeIndex];
        this.themeIndex++;

        if (this.themeIndex === this.themes.length) {
            this.themeIndex = 0;
        }

        const newTheme = this.themes[this.themeIndex];

        this.removeTheme(currentTheme);
        this.applyTheme(newTheme);
    }

    private applyTheme(theme: string): void {
        this.renderer.addClass(document.body, theme);
    }

    private removeTheme(theme: string): void {
        this.renderer.removeClass(document.body, theme);
    }
}
