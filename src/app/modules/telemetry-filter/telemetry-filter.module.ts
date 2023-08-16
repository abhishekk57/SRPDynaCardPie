import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelemetryFilterPageRoutingModule } from './telemetry-filter-routing.module';

import { TelemetryFilterPage } from './telemetry-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelemetryFilterPageRoutingModule
  ],
  declarations: [TelemetryFilterPage]
})
export class TelemetryFilterPageModule {}
