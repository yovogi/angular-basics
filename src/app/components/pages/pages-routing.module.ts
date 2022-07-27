import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouterLinksEnum } from "src/app/enums";
import { AnimalsComponent } from "./animals/animals.component";
import { DataManipulationComponent } from "./data-manipulation/data-manipulation.component";
import { DirectivesDemoComponent } from "./directives-demo/directives-demo.component";
import { HomeComponent } from "./home/home.component";
import { PipesDemoComponent } from "./pipes-demo/pipes-demo.component";
import { WeatherComponent } from "./weather/weather.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: RouterLinksEnum.home,
        pathMatch: "full",
    },
    {
        path: RouterLinksEnum.home,
        component: HomeComponent,
    },
    {
        path: RouterLinksEnum.animals,
        component: AnimalsComponent,
    },
    {
        path: RouterLinksEnum.datamanipulation,
        component: DataManipulationComponent,
    },
    {
        path: RouterLinksEnum.directives,
        component: DirectivesDemoComponent,
    },
    {
        path: RouterLinksEnum.pipes,
        component: PipesDemoComponent,
    },
    {
        path: RouterLinksEnum.weather,
        component: WeatherComponent,
    },
    {
        path: RouterLinksEnum.form,
        loadChildren: () =>
            import("../form/formdemo/formdemo.module").then(
                (m) => m.FormdemoModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
