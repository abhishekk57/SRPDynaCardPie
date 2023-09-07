import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WellDetailPageRoutingModule } from './well-detail-routing.module';
import { WellDetailPage } from './well-detail.page';
import { CommonModules } from '../common-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellDetailPageRoutingModule,
    CommonModules
  ],
  declarations: [WellDetailPage],
  
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class WellDetailPageModule {}
