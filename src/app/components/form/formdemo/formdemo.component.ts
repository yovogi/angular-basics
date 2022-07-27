import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-formdemo",
    templateUrl: "./formdemo.component.html",
    styleUrls: ["./formdemo.component.css"],
})
export class FormdemoComponent implements OnInit {
    @ViewChild("signupForm", { static: false }) sgnForm: NgForm;
    onSubmit() {
        console.log(this.sgnForm.value);
    }
    constructor() {}

    ngOnInit(): void {}
}
