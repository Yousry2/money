import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsComponent } from './pages/budgets/budgets.component';


const routes: Routes = [
  { path: '', redirectTo: '/budgets', pathMatch: 'full' },
  { path: 'budgets', component: BudgetsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
