import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonHeaderComponent } from './common-components/common-header/common-header.component';
import { MenuComponent } from './menu/menu.component';
import { SubHeaderComponent } from './common-components/sub-header/sub-header.component';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { WellInfoComponent } from './common-components/wells/well-info/well-info.component';
import { ChartingComponent } from './common-components/wells/charting/charting.component';
import { DynaCardComponent } from './common-components/wells/dyna-card/dyna-card.component';
import { PieChartComponent } from './common-components/wells/pie-chart/pie-chart.component';
import { EventsLogComponent } from './common-components/wells/events-log/events-log.component';
import { AlertsInfoComponent } from './common-components/wells/alerts-info/alerts-info.component';
import { TelemetryControlComponent } from './common-components/wells/telemetry-control/telemetry-control.component';
import { SideBarMenuComponent } from './side-bar-menu/side-bar-menu.component';
import { TextInputComponent } from './common-components/text-input/text-input.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    HttpClientModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MenuComponent,
    CommonHeaderComponent,
    SubHeaderComponent,
    WellInfoComponent,
    ChartingComponent,
    DynaCardComponent,
    PieChartComponent,
    EventsLogComponent,
    AlertsInfoComponent,
    TelemetryControlComponent,
    SideBarMenuComponent,
    TextInputComponent
  ],
  exports: [
    MenuComponent,
    FormsModule,
    CommonHeaderComponent,
    SubHeaderComponent,
    WellInfoComponent,
    ChartingComponent,
    DynaCardComponent,
    PieChartComponent,
    EventsLogComponent,
    AlertsInfoComponent,
    TelemetryControlComponent,
    SideBarMenuComponent,
    TextInputComponent
  ],
})
export class SharedModule {}
