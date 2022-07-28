import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IWeatherData } from "../interface";

@Injectable()
export class WeatherService {
    private sofiaUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=Yambol&appid=3123102d5640b78a7313a3373fba9bf1&units=metric";
    constructor(private http: HttpClient) {}

    public sayHi() {
        console.log("Hi from the service");
    }

    getWeather(city) {
        return this.http.get<IWeatherData>(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3123102d5640b78a7313a3373fba9bf1&units=metric`
        );
    }
}
