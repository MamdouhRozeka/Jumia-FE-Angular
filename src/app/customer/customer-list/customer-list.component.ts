import { CountryService } from "./../../service/country.service";
import { Observable } from "rxjs/index";
import { CustomerService } from "./../../service/customer.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiResponse } from "src/app/model/api.response";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"],
})
export class CustomerListComponent implements OnInit {
  customers: Observable<ApiResponse>;
  countries: Observable<ApiResponse>;
  selectedCountry: string;
  selectedState: string;

  constructor(
    private customerService: CustomerService,
    private countryService: CountryService,
    private router: Router
  ) {}
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.selectedCountry = "";
    this.selectedState = null;
    this.customers = this.customerService.getCustomers(
      this.selectedCountry,
      this.selectedState
    );
    this.countries = this.countryService.getCountries();
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 5,
      processing: true,
    };
  }

  onCountryChange(newValue) {
    this.selectedCountry = newValue;
    this.customers = this.customerService.getCustomers(
      this.selectedCountry,
      this.selectedState
    );
  }
  onStateChange(newValue) {
    this.selectedState = newValue;
    this.customers = this.customerService.getCustomers(
      this.selectedCountry,
      this.selectedState
    );
  }
}
