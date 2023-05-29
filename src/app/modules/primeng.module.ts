import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    CalendarModule,
    ChartModule
  ]
})
export class PrimengModule { }
