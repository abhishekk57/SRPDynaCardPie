import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelemetryPageRoutingModule } from './telemetry-routing.module';

import { TelemetryPage } from './telemetry.page';
import { SharedModule } from "../../SharedModule";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelemetryPageRoutingModule,
    SharedModule
    
  ],
  declarations: [TelemetryPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class TelemetryPageModule {}
