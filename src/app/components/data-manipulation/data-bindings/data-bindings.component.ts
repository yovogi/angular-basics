import { Component } from "@angular/core";

@Component({
    selector: "data-binding",
    templateUrl: "./data-bindings.component.html",
})
export class DataBindingComponent {
    public firstNumber: number;
    public secondNumber: number;
    public operation: string;

    public setFirstNumber(value) {
        this.firstNumber = +value;
    }

    public setSecondNumber(value) {
        this.secondNumber = +value;
    }
    public getResult(): number {
        switch (this.operation) {
            case "+":
                return this.firstNumber + this.secondNumber;
            case "-":
                return this.firstNumber - this.secondNumber;
            case "*":
                return this.firstNumber * this.secondNumber;
            case "÷":
                return this.firstNumber / this.secondNumber;
        }
    }
}
