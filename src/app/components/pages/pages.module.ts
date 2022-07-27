import { NgModule } from "@angular/core";
import { DataManipulationComponent } from "./data-manipulation/data-manipulation.component";
import { HomeComponent } from "./home/home.component";
import { AnimalsComponent } from "./animals/animals.component";
import { DataManipulationModule } from "../data-manipulation/data-manipulation.module";
import { DirectivesDemoComponent } from "./directives-demo/directives-demo.component";
import { PipesDemoComponent } from "./pipes-demo/pipes-demo.component";
import { WeatherComponent } from "./weather/weather.component";
import { CommonModule } from "@angular/common";
import { AnimalsModule } from "src/app/animals/animals.module";
import { FormpageComponent } from "./formpage/formpage.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { FormdemoModule } from "../form/formdemo/formdemo.module";

@NgModule({
    declarations: [
        DataManipulationComponent,
        HomeComponent,
        AnimalsComponent,
        DirectivesDemoComponent,
        PipesDemoComponent,
        WeatherComponent,
        FormpageComponent,
    ],
    imports: [
        DataManipulationModule,
        CommonModule,
        AnimalsModule,
        FormdemoModule,
        PagesRoutingModule,
    ],
    exports: [],
})
export class PagesModule {}
