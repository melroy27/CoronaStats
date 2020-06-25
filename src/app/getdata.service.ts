import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  BasedOnCountry = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php';
  GlobalCount = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php';
  JustOneCountry = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php';

  country: any;
  client: any;
  constructor(private http: HttpClient) { }

  getByCountry() {
    const headers = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': '7990b1ced6mshb4f5d6ce58f7ab3p1fc4c7jsn8a425388c252'

      })
    };
    return this.http.get(this.BasedOnCountry, headers);
  }
  getWorldCount() {
    const headers = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': '7990b1ced6mshb4f5d6ce58f7ab3p1fc4c7jsn8a425388c252'
      })
    };
    return this.http.get(this.GlobalCount, headers);
  }

  getOfOneCountry() {
    const params = new HttpParams();
    const headers = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': '7990b1ced6mshb4f5d6ce58f7ab3p1fc4c7jsn8a425388c252',
      }),
      params: params.append('country', 'india'),
    };

    return this.http.get(this.JustOneCountry, headers);
  }

}
