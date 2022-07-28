import { Component, OnInit, ViewChild } from "@angular/core";
import { Form, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-formdemo",
    templateUrl: "./formdemo.component.html",
    styleUrls: ["./formdemo.component.css"],
})
export class FormdemoComponent implements OnInit {
    public bannedUsers: String[] = ["yovo", "pavkata", "stakata", "ivan"];

    public myForm: FormGroup = new FormGroup({
        username: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(10),
            this.customValidator.bind(this),
        ]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(12),
        ]),
        note: new FormControl("", [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(20),
        ]),
    });

    constructor() {}

    ngOnInit(): void {}

    onSubmit() {
        console.log(this.myForm);
    }

    customValidator(control: FormControl): { [s: string]: boolean } {
        if (this.bannedUsers.includes(control.value)) {
            return { customValidation: true };
        }
        return null;
    }
}
