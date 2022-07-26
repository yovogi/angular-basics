import { Component } from "@angular/core";

@Component({
    selector: "user-events",
    templateUrl: "./user-events.component.html",
    styleUrls: ["./user-events.component.scss"],
})
export class UserEventsComponent {
    public lastPressedKey: string = "Implement This";
    public isRedSquareHovered: boolean = false;
    isHovered: boolean = false;

    onKeyUp(event) {
        this.lastPressedKey = event.key;
    }

    onAlert() {
        alert("something wrong!");
    }

    turnOnHover() {
        this.isHovered = true;
        console.log("Turning on hovering");
    }

    turnOffHover() {
        this.isHovered = false;
        console.log("Turning off hovering");
    }
}
