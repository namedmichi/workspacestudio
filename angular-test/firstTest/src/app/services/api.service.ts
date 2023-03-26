import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Country } from '../types/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  borderCountries$: Observable<Country[]>;
  private api = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get<Country[]>(`https://restcountries.com/v2/all`);
  }
  
  getCountryByName(name: string) {
    return this.http
    .get<Country[]>(`${this.api}/name/${name}`)
    .pipe(map(([res]) => res));
  }
  getCountriesByCodes(codes: string[]) {
    console.log(`https://restcountries.com/v3.1/alpha?codes=${codes.join(',')}`);

    return this.http.get<Country[]>(
      `${this.api}/alpha?codes=${codes.join(',')}`
    );
  }

}