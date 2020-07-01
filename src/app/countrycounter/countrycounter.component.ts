import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/getdata.service';
import { SharingdataService } from 'src/app/sharingdata.service';
import { Message, ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-countrycounter',
  templateUrl: './countrycounter.component.html',
  styleUrls: ['./countrycounter.component.scss'],
  providers: [ConfirmationService]
})
export class CountrycounterComponent implements OnInit {
  cols: any[];
  countryStat: any;
  first = 0;
  rows = 10;
  oneCountry: any;
  data: any[];
  selectedValues: any[];
  msgs: Message[] = [];
  country: string;
  c1 = [];
  c2 = [];
  // tslint:disable-next-line: max-line-length
  constructor(private getService: GetdataService, private sharingData: SharingdataService) { }

  confirm1(selectedItem: any) {
    // this.confirmationService.confirm({
    //   message: 'Are you sure that you want to proceed?',
    //   header: 'Confirmation',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
    //   },
    //   reject: () => {
    //     this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
    //   }
    // });
    // console.log(selectedItem.country_name);

    this.country = selectedItem.country_name;

    console.log('Country', this.country);
    this.c1.push(this.country);
    this.c2 = this.c1;
    console.log('Array', this.c2);
    this.sharingData.updateData(this.c2);
  }

  ngOnInit() {
    this.sharingData.currentMessage.subscribe(() => this.country = this.country);

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
