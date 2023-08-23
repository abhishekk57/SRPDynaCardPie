import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WellListPageRoutingModule } from './well-list-routing.module';

import { WellListPage } from './well-list.page';
import { SharedModule } from 'src/app/SharedModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellListPageRoutingModule,
    SharedModule
  ],
  declarations: [WellListPage],
  
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class WellListPageModule {}
