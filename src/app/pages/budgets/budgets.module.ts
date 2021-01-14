import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetsComponent } from './budgets/budgets.component';
import { SharedModule } from '../../shared/shared.module';
import { AccountsComponent } from './accounts/accounts.component';
import { PayeesComponent } from './payees/payees.component';
import { BudgetsRoutingModule } from './budgets-routing.module';
import { BudgetListComponent } from './list/budget-list.component';
import { BudgetDetailsComponent } from './budget-details/budget-details.component';
import { PayeeDetailsComponent } from './payee-details/payee-details.component';
import { PayeeTransactionsComponent } from './payee-transactions/payee-transactions.component';
import { PayeeListComponent } from './payee-list/payee-list.component'



@NgModule({
  declarations: [BudgetsComponent, AccountsComponent, PayeesComponent, BudgetListComponent, BudgetDetailsComponent, PayeeDetailsComponent, PayeeTransactionsComponent, PayeeListComponent],
  imports: [
    CommonModule, SharedModule, BudgetsRoutingModule
  ]
})
export class BudgetsModule { }
