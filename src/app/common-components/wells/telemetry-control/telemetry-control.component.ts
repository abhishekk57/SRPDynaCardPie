import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telemetry-control',
  templateUrl: './telemetry-control.component.html',
  styleUrls: ['./telemetry-control.component.scss'],
})
export class TelemetryControlComponent implements OnInit {
  titleData: any = 'Telemetry';
  data: any = [];
  CurrenPageTitle: string = 'Telemetry';
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(item: any) {
    console.log(' telemetry page---', item);
    this.router.navigateByUrl('/telemetry/telemetry-details', {
      state: item,
    });
  }
}
