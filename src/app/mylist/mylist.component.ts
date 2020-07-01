import { Component, OnInit } from '@angular/core';
import { SharingdataService } from 'src/app/sharingdata.service';
@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MylistComponent implements OnInit {
  c1 = [];
  country: string;
  constructor(private shared: SharingdataService) { }

  ngOnInit() {
    this.shared.currentMessage.subscribe(country => this.country = country);
    this.c1.push(this.country);
    console.log(this.c1);
  }

}
