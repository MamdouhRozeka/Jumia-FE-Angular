import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";
import { ApiResponse } from "../model/api.response";
import { Customer } from "../model/customer.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.baseUrl;

  getCustomers(
    selectedCountry: String,
    selectedState: String
  ): Observable<ApiResponse> {
    let params = {};
    if (selectedCountry) {
      params = {
        ...params,
        country: selectedCountry,
      };
    }
    if (selectedState !== null) {
      params = {
        ...params,
        state: selectedState,
      };
    }
    var queryString = $.param(params);
    return this.http.get<ApiResponse>(
      `${this.baseUrl}/getCustomers?${queryString}`
    );
  }
}
