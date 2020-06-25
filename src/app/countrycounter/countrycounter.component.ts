import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/getdata.service';

@Component({
  selector: 'app-countrycounter',
  templateUrl: './countrycounter.component.html',
  styleUrls: ['./countrycounter.component.scss']
})
export class CountrycounterComponent implements OnInit {
  cols: any[];
  countryStat: any;
  first = 0;
  rows = 10;
  oneCountry: any;
  data: any[];
  constructor(private getService: GetdataService) { }

  ngOnInit() {
    this.getService.getByCountry().subscribe((res: any) => {
      this.countryStat = res.countries_stat;
      console.log('COUNTRY', this.countryStat);
    });

    this.getService.getOfOneCountry().subscribe((res: any) => {
      this.oneCountry = res;
      console.log('ONE', this.oneCountry.latest_stat_by_country[0]);
      this.data = [{}];
    });

    this.cols = [
      { field: 'country_name', header: 'country' },
      { field: 'deaths', header: 'deaths' },
      { field: 'cases', header: 'cases' },
      { field: 'new_cases', header: 'new cases today' },
      { field: 'new_deaths', header: 'new deaths today' },
      { field: 'total_recovered', header: 'recovered' },
      { field: 'total_tests', header: 'total tests' },
    ];
  }

}
