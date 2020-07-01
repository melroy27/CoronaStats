import { Component, OnInit } from '@angular/core';
import { SharingdataService } from 'src/app/sharingdata.service';
@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MylistComponent implements OnInit {
  c1 = [];
  country: [];
  constructor(private shared: SharingdataService) { }

  ngOnInit() {

    this.shared.currentMessage.subscribe(country => this.country = country);
    this.c1.push(this.country);
    console.log(Array, this.c1);
  }
  deleteRow(id: any) {
    for (let i = 0; i < this.country.length; i++) {
      if (this.country[i] === id) {
        this.country.splice(i, 1);
      }
    }
  }
}
