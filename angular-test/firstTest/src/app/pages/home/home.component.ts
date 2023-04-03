import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Country } from "src/app/types/api"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  countries$: Observable<Country[]> ;
  count$: number = 1;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.countries$ = this.api.getAllCountries();
    this.count$ = parseInt(this.getCount().toString())
  }
  getCountries(region: string){
    this.countries$ = this.api.getCountriesByRegion(region);
  }
  async getCount(){
  
    await new Promise(r => setTimeout(r, 1200));

    var elements = document.getElementsByName("card");
    var za = 0
    for (let index = 0; index < elements.length; index++) {

      za += 1
    }
    this.count$ = za
    return za
  }
  async updateCount(){

    await new Promise(r => setTimeout(r, 400));

    var elements = document.getElementsByName("card");
    var za = 0
    for (let index = 0; index < elements.length; index++) {
      za += 1
    }
    this.count$ = za
    return za
  }
  getCountriesName(){
    const input = document.getElementById('nameInpu') as HTMLInputElement;
    var name = input?.value;

    if (name.length == 0){
      this.countries$ = this.api.getAllCountries();
      return
    }
    this.countries$ = this.api.getCountryByNames(name.toString())
  }
}
