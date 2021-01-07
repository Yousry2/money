import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetsComponent } from './budgets/budgets.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [BudgetsComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class BudgetsModule { }
