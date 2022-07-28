import { Component, OnInit } from "@angular/core";
import { IWeatherData } from "src/app/interface";
import { WeatherService } from "src/app/services";

@Component({
    templateUrl: "./weather.component.html",
})
export class WeatherComponent implements OnInit {
    public cityWeather: IWeatherData;
    public city: string = "";
    constructor(private weather: WeatherService) {}
    ngOnInit(): void {
        this.weather.sayHi();
        // console.log("hello");
        this.weather.getWeather(this.city).subscribe((r) => {
            this.cityWeather = r;
            console.log(this.cityWeather);
        });
    }

    handleChange() {
        console.log("Changed");
        this.weather.getWeather(this.city).subscribe((r) => {
            this.cityWeather = r;
            console.log(this.cityWeather);
        });
    }
}
