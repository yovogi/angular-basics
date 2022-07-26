import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "custom-input",
    templateUrl: "./custom-input.comoponent.html",
})
export class CustomInputComponent {
    @Input()
    public inputValue: string;
    @Output() inputChanged = new EventEmitter();

    changeValue(inputElement) {
        this.inputChanged.emit(inputElement.value);
    }
}
