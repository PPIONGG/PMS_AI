import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { TreeSelectModule } from 'primeng/treeselect';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CalendarModule,
    ChartModule,
    TreeSelectModule,
    DropdownModule,
    MultiSelectModule,
    CardModule,
    ToastModule,
    TableModule,
    InputTextModule
  ]
})
export class PrimengModule { }
