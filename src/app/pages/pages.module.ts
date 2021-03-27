import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from './navigation/navigation.module';
import { BudgetsModule } from './budgets/budgets.module';
import { TableComponent } from './budgets/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationModule,
    BudgetsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports:[NavigationModule]
})
export class PagesModule { }
