import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './SharedModule';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/dash-board/dash-board.module').then(
            (m) => m.DashBoardPageModule
          ),
      },
      {
        path: 'wells',
        children: [
          {
            path: '',
            loadChildren: () => import('./modules/well-list/well-list.module').then( m => m.WellListPageModule)
          },
          {
            path: 'well-detail',
            loadChildren: () =>
              import('./well-detail/well-detail.module').then(
                (m) => m.WellDetailPageModule
              ),
          },
        ],
      },  
      {
        path: 'alerts',
        loadChildren: () =>
          import('./modules/alerts/alerts.module').then(
            (m) => m.AlertsPageModule
          ),
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('./modules/notifications/notifications.module').then(
            (m) => m.NotificationsPageModule
          ),
      },

      {
        path: 'telemetry',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./modules/telemetry/telemetry.module').then(
                (m) => m.TelemetryPageModule
              ),
          },
          {
            path: 'telemetry-details',
            loadChildren: () =>
              import('./telemetry-details/telemetry-details.module').then(
                (m) => m.TelemetryDetailsPageModule
              ),
          },
        ],
      },

      {
        path: 'events',
        // loadChildren: () => import('./modules/customer-admin/customer-admin.module').then( m => m.CustomerAdminPageModule)
        loadChildren: () => import('./modules/events/events.module').then( m => m.EventsPageModule)
      },
      
      {
        path: 'more',
        loadChildren: () =>
          import('./modules/more/more.module').then((m) => m.MorePageModule),
      },
      {
        path: 'customer-admin',
        loadChildren: () => import('./modules/customer-admin/customer-admin.module').then( m => m.CustomerAdminPageModule)
      },
    ],
  },
  // {
  //   path: 'customer-admin',
  //   loadChildren: () => import('./modules/customer-admin/customer-admin.module').then( m => m.CustomerAdminPageModule)
  // },
  {
    path: 'telemetry-filter',
    loadChildren: () => import('./modules/telemetry-filter/telemetry-filter.module').then( m => m.TelemetryFilterPageModule)
  },
  {
    path: 'well-list',
    loadChildren: () => import('./modules/well-list/well-list.module').then( m => m.WellListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginPageModule)
  },



];

@NgModule({
  imports: [SharedModule, IonicModule.forRoot(), RouterModule.forRoot(routes)],
  exports: [IonicModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppRoutingModule {}
