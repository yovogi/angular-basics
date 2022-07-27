import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormdemoComponent } from "./formdemo.component";

const routes: Routes = [
    {
        path: "form",
        component: FormdemoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FormdemoRoutingModule {}
