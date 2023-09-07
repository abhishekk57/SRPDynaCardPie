import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertsPageRoutingModule } from './alerts-routing.module';

import { AlertsPage } from './alerts.page';
import { SharedModule } from "../../SharedModule";
import { CommonModules } from "../../common-module";

@NgModule({
    declarations: [AlertsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlertsPageRoutingModule,
        SharedModule,
        CommonModules
    ]
})
export class AlertsPageModule {}
