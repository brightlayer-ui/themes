import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    isDark = false;
    showNotice = true;

    constructor(private renderer: Renderer2) {}

    toggleTheme() {
        this.isDark = !this.isDark;
        if (this.isDark) {
          this.renderer.addClass(document.body, 'pxb-blue-dark');
        } else {
          this.renderer.removeClass(document.body, 'pxb-blue-dark');
        }
    }
}
