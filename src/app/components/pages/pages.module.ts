import { NgModule } from "@angular/core";
import { DataManipulationComponent } from "./data-manipulation/data-manipulation.component";
import { HomeComponent } from "./home/home.component";
import { AnimalsComponent } from "./animals/animals.component";
import { DataManipulationModule } from "../data-manipulation/data-manipulation.module";
import { DirectivesDemoComponent } from "./directives-demo/directives-demo.component";
import { PipesDemoComponent } from "./pipes-demo/pipes-demo.component";
import { WeatherComponent } from './weather/weather.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DataManipulationComponent,
        HomeComponent,
        AnimalsComponent,
        DirectivesDemoComponent,
        PipesDemoComponent,
        WeatherComponent
    ],
    imports: [DataManipulationModule, CommonModule],
    exports: []
})
export class PagesModule { }
