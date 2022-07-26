import { Component } from "@angular/core";
import { JobEnum } from "src/app/enums";

@Component({
    selector: "displaying-data",
    styleUrls: ["./displaying-data.component.css"],
    templateUrl: "./displaying-data.component.html",
})
export class DisplayingDataComponent {
    public listOfPeople: IPerson[] = [
        { name: "John", age: 21, job: JobEnum.cook },
        { name: "Jack", age: 12, job: JobEnum.doctor },
        { name: "Jina", age: 45, job: JobEnum.pilot },
        { name: "Jules", age: 12, job: JobEnum.cook },
        { name: "Jenny", age: 36, job: JobEnum.doctor },
        { name: "Jim", age: 60, job: JobEnum.mechanic },
        { name: "James", age: 4, job: JobEnum.cook },
        { name: "Juniper", age: 7, job: JobEnum.cook },
    ];
}

export interface IPerson {
    name: string;
    age: number;
    job: JobEnum;
}
