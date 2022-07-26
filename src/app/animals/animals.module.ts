import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CatComponent } from "./cat/cat.component";
import { DogComponent } from "./dog/dog.component";

@NgModule({
    declarations: [CatComponent, DogComponent],
    exports: [CatComponent, DogComponent],
    imports: [CommonModule],
})
export class AnimalsModule {}
