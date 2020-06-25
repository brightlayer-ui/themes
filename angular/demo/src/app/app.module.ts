import { NgModule } from '@angular/core';
import { DemoModule } from './demo/demo.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './core/shared.module';
import { DrawerLayoutModule } from '@pxblue/angular-components';

@NgModule({
    imports: [DrawerLayoutModule, AppRoutingModule, SharedModule, DemoModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
