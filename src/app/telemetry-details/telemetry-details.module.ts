import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelemetryDetailsPageRoutingModule } from './telemetry-details-routing.module';

import { TelemetryDetailsPage } from './telemetry-details.page';
import { SharedModule } from '../SharedModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelemetryDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [TelemetryDetailsPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class TelemetryDetailsPageModule {}
