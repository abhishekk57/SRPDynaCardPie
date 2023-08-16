import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelemetryFilterPage } from './telemetry-filter.page';

const routes: Routes = [
  {
    path: '',
    component: TelemetryFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelemetryFilterPageRoutingModule {}
