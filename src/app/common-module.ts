import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { CalendarComponent } from './component-modules/calendar-filter/calendar-filter.component';
import { SubHeaderComponent } from './component-modules/sub-header/sub-header.component';
import { CommonHeaderComponent } from './component-modules/common-header/common-header.component';

@NgModule({
    imports: [CommonModule, IonicModule.forRoot(), HttpClientModule, HighchartsChartModule,
        FormsModule, ReactiveFormsModule, MatCardModule, MatDatepickerModule,
        MatNativeDateModule, MatSortModule, MatTableModule,
        MatPaginatorModule, MatSelectModule, MatFormFieldModule, MatMenuModule],
    declarations: [CommonHeaderComponent, SubHeaderComponent, CalendarComponent],
    exports: [FormsModule, CommonHeaderComponent,
        SubHeaderComponent, CalendarComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CommonModules { }