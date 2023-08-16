import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelemetryDetailsPage } from './telemetry-details.page';

const routes: Routes = [
  {
    path: '',
    component: TelemetryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelemetryDetailsPageRoutingModule {}
