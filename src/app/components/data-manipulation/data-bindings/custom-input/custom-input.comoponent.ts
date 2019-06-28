import { Component, Input } from "@angular/core";

@Component({
    selector: "custom-input",
    templateUrl: "./custom-input.comoponent.html"
})
export class CustomInputComponent {
    @Input()
    public inputValue: string;
}
