import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerAdminPage } from './customer-admin.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerAdminPageRoutingModule {}
