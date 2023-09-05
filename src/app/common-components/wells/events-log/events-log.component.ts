
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { DataService } from 'src/app/api/data.service';
import { RestApiService } from 'src/app/api/restApi.service';

@Component({
  selector: 'app-events-log',
  templateUrl: './events-log.component.html',
  styleUrls: ['./events-log.component.scss'],
})
export class EventsLogComponent implements OnInit {
  titleData: any = "Events";
  data: any = []
  CurrenPageTitle: string = "Events";
  
  tempData: any = [];
  public results: any;
  
  constructor(private router: Router,
    private httpService: RestApiService,
    public dataService: DataService) { }

  ngOnInit() {
    this.generateItems();    
    this.tempData = this.dataService.well_list;
    this.results = [...this.tempData];
    console.log('temp data 11 -', this.tempData);
  }
  navigateTo(item: any) {
    console.log("navigateTo ---",item)
    this.router.navigateByUrl('alert-detail',{
      state:item
    });
  }
  getColorStatus(index: any) {
    if (index === 0) {
      return "#eb445a"
    } else if (index === 1) {
      return "#135d54"
    } else if (index === 2) {
      return "#e0a41c"
    } else {
      return "#eb445a"
    }
  }

  private generateItems() {
    for (let i = 0; i < 15; i++) {
      let obj = {
        well_name: "Well Name 001",
        desc: "Description will be seen here. Description will be seen here.",
        status: 'Status1',
        time: "2023:04:12 07:33:56 AM"
      }
      this.data.push(obj);
    }
  }
  onIonInfinite(event: any) {
    this.generateItems();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
