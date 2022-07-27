import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PagesModule } from "./components/pages/pages.module";
import { MathUtilService } from "./services";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, PagesModule],
    providers: [MathUtilService],
    bootstrap: [AppComponent],
})
export class AppModule {}
