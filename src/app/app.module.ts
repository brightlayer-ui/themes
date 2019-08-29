import {NgModule} from "@angular/core";
import {DemoModule} from "./demo/demo.module";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    imports: [AppRoutingModule, DemoModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
