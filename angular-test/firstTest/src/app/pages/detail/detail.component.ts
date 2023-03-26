import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, forkJoin, of } from 'rxjs';
import { Country, Currency, Flags, Language } from 'src/app/types/api';
import { ActivatedRoute } from '@angular/router';
import { tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  country$: Observable<Country>;
  borderCountries$: Observable<Country[]>;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country$ = this.api.getCountryByName(params['country']).pipe(
        tap((res) => console.log(res))
      );
    });
  }

  displayCurrencies(currencies: Currency[]) {
    var a = Object.values(currencies).map((currency) => currency)
    var z = Object.values(a[0]).map((b) => b)
    
    return z[1]+ " " + z[0]
  }
  
  displayLanguages(languages: Language[]) {
    return Object.values(languages).map((language) => language)
  }
  getFlag(flag: Flags) {
    var a = Object.values(flag).map((flag) => flag)
    return a[1];
    
    
  }
  displayName(name: string) {

    var a = Object.values(name).map((name) => name)
    return a[0]
  }
  displayDomain(domain: string[]){
    console.log(domain)
  }
}