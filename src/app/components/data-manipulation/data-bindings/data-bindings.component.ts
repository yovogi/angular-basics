import { Component } from "@angular/core";

@Component({
    selector: "data-binding",
    templateUrl: "./data-bindings.component.html"
})
export class DataBindingComponent {
    public firstNumber: number = 3;
    public secondNumber: number = 8;

    public getResult(): number {
        return this.firstNumber + this.secondNumber;
    }
}
