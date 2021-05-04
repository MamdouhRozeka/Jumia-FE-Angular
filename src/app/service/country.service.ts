import { ApiResponse } from "./../model/api.response";
import { Observable } from "rxjs/index";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.baseUrl;

  getCountries(): Observable<ApiResponse> {
    console.log("Inside!!");
    return this.http.get<ApiResponse>(this.baseUrl + "/getCountries");
  }
}
