import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetsComponent } from './pages/budgets/budgets/budgets.component';
import { BudgetsModule } from './pages/budgets/budgets.module';

const routes: Routes = [
  { path: '', redirectTo: '/budgets', pathMatch: 'full' },
  { path: 'budgets', component: BudgetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BudgetsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
