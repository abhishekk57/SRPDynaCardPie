import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerAdminPageRoutingModule } from './customer-admin-routing.module';

import { CustomerAdminPage } from './customer-admin.page';
import { SharedModule } from 'src/app/SharedModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerAdminPageRoutingModule,
    SharedModule
  ],
  declarations: [CustomerAdminPage],
 
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class CustomerAdminPageModule {}
