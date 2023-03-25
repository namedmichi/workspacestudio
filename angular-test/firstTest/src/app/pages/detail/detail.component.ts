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
    console.log(Object.keys(currencies));
    return Object.keys(currencies).map((currency) => currency)
  }

  displayLanguages(languages: Language[]) {
    return Object.keys(languages).map((language) => language)
  }
  getFlag(flag: Flags) {
    var a = Object.values(flag).map((flag) => flag)
    return a[1];
    
    
  }
}