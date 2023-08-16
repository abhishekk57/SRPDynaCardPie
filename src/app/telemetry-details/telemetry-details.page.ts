import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telemetry-details',
  templateUrl: './telemetry-details.page.html',
  styleUrls: ['./telemetry-details.page.scss'],
})
export class TelemetryDetailsPage implements OnInit {
  
  titleData: any = "Telemetry & Control";
  data: any = []
  CurrenPageTitle: string = "Telemetry & Control";

  constructor() { }

  ngOnInit() {
  }

}
