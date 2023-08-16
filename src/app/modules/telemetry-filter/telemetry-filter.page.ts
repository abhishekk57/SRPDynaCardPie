import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telemetry-filter',
  templateUrl: './telemetry-filter.page.html',
  styleUrls: ['./telemetry-filter.page.scss'],
})
export class TelemetryFilterPage implements OnInit {
  isModalOpen = true;
  constructor() { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
