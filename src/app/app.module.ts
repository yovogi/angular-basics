import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PagesModule } from "./components/pages/pages.module";
import { MathUtilService, WeatherService } from "./services";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, PagesModule, HttpClientModule],
    providers: [MathUtilService, WeatherService],
    bootstrap: [AppComponent],
})
export class AppModule {}
