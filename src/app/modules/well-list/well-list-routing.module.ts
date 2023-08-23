import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WellListPage } from './well-list.page';

const routes: Routes = [
  {
    path: '',
    component: WellListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellListPageRoutingModule {}
