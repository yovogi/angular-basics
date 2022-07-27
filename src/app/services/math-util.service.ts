import { Injectable } from "@angular/core";

@Injectable()
export class MathUtilService {
    public sumOfTwo(): number {
        return 5;
    }

    public getResult(firstNumber, secondNumber, operation): number {
        switch (operation) {
            case "+":
                return firstNumber + secondNumber;
            case "-":
                return firstNumber - secondNumber;
            case "*":
                return firstNumber * secondNumber;
            case "÷":
                return firstNumber / secondNumber;
        }
    }
}
