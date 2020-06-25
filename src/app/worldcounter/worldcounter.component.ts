import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/getdata.service';
@Component({
  selector: 'app-worldcounter',
  templateUrl: './worldcounter.component.html',
  styleUrls: ['./worldcounter.component.scss']
})
export class WorldcounterComponent implements OnInit {
  worldStat: any;
  colls: any;
  constructor(private getService: GetdataService) { }

  ngOnInit() {
    this.getService.getWorldCount().subscribe((res) => {
      this.worldStat = res;
      console.log('WORLD', this.worldStat);
      this.colls = [{}];
    });
  }
}
