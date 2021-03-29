import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { BudgetsComponent } from './pages/budgets/budgets.component';

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};


const routes: Routes = [
  { path: '', redirectTo: '/budgets/list', pathMatch: 'full' },
  { path: 'budgets', redirectTo: '/budgets/list', pathMatch: 'full' },
  { path: 'budgets', component: BudgetsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
