import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetsComponent } from './budgets.component';
import { BudgetListComponent } from './list/budget-list.component';
import { BudgetDetailsComponent } from './budget-details/budget-details.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PayeesComponent } from './payees/payees.component';
import { PayeeDetailsComponent } from './payee-details/payee-details.component';
import { PayeeTransactionsComponent } from './payee-transactions/payee-transactions.component';
import { PayeeListComponent } from './payee-list/payee-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'budgets', pathMatch: 'full' },
  {
    path: 'budgets', component: BudgetsComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: BudgetListComponent },
      {
        path: ':budgetId', component: BudgetDetailsComponent, children: [
          { path: 'accounts', component: AccountsComponent },
          {
            path: 'payees', component: PayeesComponent, children: [
              { path: '', redirectTo: 'list', pathMatch: 'full' },
              { path: 'list', component: PayeeListComponent },
              {
                path: ':payeeId', component: PayeeDetailsComponent, children:
                  [
                    { path: 'transactions', component: PayeeTransactionsComponent }
                  ]
              }
            ]
          },
        

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetsRoutingModule { }