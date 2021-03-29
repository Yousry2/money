import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger/logger.service';
import { ConsoleLoggerService } from './logger/console-logger/console-logger.service';
import { AuthService } from './auth/auth.service';
import { MoneyAuthService } from './auth/money-auth/money-auth.service';
import { httpInterceptorProviders } from './http/interceptors';
import { BudgetsApiService } from './api/budgets-api.service';
import { AccountsApiService } from './api/accounts-api.service';
import { PayeessApiService } from './api/payees-api.service';
import { HttpClientModule } from '@angular/common/http';
import { TransactionsApiService } from './api/transactions-api.service';



@NgModule({
  declarations: [],
  providers: [
    { provide: LoggerService, useClass: ConsoleLoggerService },
    { provide: AuthService, useClass: MoneyAuthService },
    BudgetsApiService,
    AccountsApiService,
    PayeessApiService,
    TransactionsApiService,
    httpInterceptorProviders
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
