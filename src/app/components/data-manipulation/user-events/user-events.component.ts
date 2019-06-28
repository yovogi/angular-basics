import { Component } from "@angular/core";

@Component({
    selector: "user-events",
    templateUrl: "./user-events.component.html",
    styleUrls: ["./user-events.component.scss"]
})
export class UserEventsComponent {
    public lastPressedKey: string = "Implement This";
    public isRedSquareHovered: boolean = false;
}
