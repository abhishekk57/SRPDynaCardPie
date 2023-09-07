import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WellListPageRoutingModule } from './well-list-routing.module';
import { WellListPage } from './well-list.page';
import { CommonModules } from 'src/app/common-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellListPageRoutingModule,
    CommonModules
  ],
  declarations: [WellListPage],
  
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class WellListPageModule {}
