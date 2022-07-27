import {
    AfterViewInit,
    Component,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from "@angular/core";
import { MathUtilService } from "src/app/services";

@Component({
    selector: "data-binding",
    templateUrl: "./data-bindings.component.html",
})
export class DataBindingComponent
    implements OnInit, AfterViewInit, OnChanges, OnDestroy
{
    public firstNumber: number;
    public secondNumber: number;
    public operation: string;
    public name: string;
    constructor(private math: MathUtilService) {}

    public setFirstNumber(value) {
        this.firstNumber = +value;
    }

    public setSecondNumber(value) {
        this.secondNumber = +value;
    }
    // public getResult(): number {
    //     switch (this.operation) {
    //         case "+":
    //             return this.firstNumber + this.secondNumber;
    //         case "-":
    //             return this.firstNumber - this.secondNumber;
    //         case "*":
    //             return this.firstNumber * this.secondNumber;
    //         case "÷":
    //             return this.firstNumber / this.secondNumber;
    //     }
    // }

    public getResult(): number {
        return this.math.getResult(
            this.firstNumber,
            this.secondNumber,
            this.operation
        );
    }

    ngOnInit(): void {
        console.log("ngOnInit hook");
    }

    ngAfterViewInit(): void {
        console.log("AfterViewInit hook");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("OnChanges hook");
    }

    ngOnDestroy(): void {
        console.log("OnDestroy hook");
    }
}
