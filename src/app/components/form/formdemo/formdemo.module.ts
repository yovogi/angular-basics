import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormdemoComponent } from "./formdemo.component";
import { FormdemoRoutingModule } from "./formdemo-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [FormdemoComponent],
    exports: [FormdemoComponent],
    imports: [
        CommonModule,
        FormdemoRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class FormdemoModule {}
