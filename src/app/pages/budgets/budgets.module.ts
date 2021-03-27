import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AccountsComponent } from './accounts/accounts.component';
import { BudgetDetailsComponent } from './budget-details/budget-details.component';
import { BudgetsRoutingModule } from './budgets-routing.module';
import { BudgetsComponent } from './budgets/budgets.component';
import { BudgetListComponent } from './list/budget-list.component';
import { PayeeDetailsComponent } from './payee-details/payee-details.component';
import { PayeeListComponent } from './payee-list/payee-list.component';
import { PayeeTransactionsComponent } from './payee-transactions/payee-transactions.component';
import { PayeesComponent } from './payees/payees.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [TableComponent, BudgetsComponent, AccountsComponent, PayeesComponent, BudgetListComponent, BudgetDetailsComponent, PayeeDetailsComponent, PayeeTransactionsComponent, PayeeListComponent],
  imports: [
    CommonModule, SharedModule, BudgetsRoutingModule
  ]
})
export class BudgetsModule { }
