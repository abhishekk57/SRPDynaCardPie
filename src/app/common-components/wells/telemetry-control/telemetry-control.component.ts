import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/api/data.service';
import { RestApiService } from 'src/app/api/restApi.service';

@Component({
  selector: 'app-telemetry-control',
  templateUrl: './telemetry-control.component.html',
  styleUrls: ['./telemetry-control.component.scss'],
})
export class TelemetryControlComponent implements OnInit {
  titleData: any = 'Telemetry';
  data: any = [];
  CurrenPageTitle: string = 'Telemetry';
  
  tempData: any = [];
  public results: any;

  
  constructor(private router: Router,
    private httpService: RestApiService,
    public dataService: DataService,) {}

  ngOnInit() {
    
    this.tempData = this.dataService.well_list;
    this.results = [...this.tempData];
  }

  navigateTo(item: any) {
    console.log(' telemetry page---', item);
    this.router.navigateByUrl('/telemetry/telemetry-details', {
      state: item,
    });
  }
}
