import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PagesModule } from "./components/pages/pages.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, PagesModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
