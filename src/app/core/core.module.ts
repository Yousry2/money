import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { LoggerService } from './logger/logger.service';
import { MoneyAuthService } from './auth/money-auth/money-auth.service';
import { ConsoleLoggerService } from './logger/console-logger/console-logger.service';
import { BudgetsApiService, AccountsApiService, PayeessApiService } from './api';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http/interceptors';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: AuthService, useClass: MoneyAuthService }
    , { provide: LoggerService, useClass: ConsoleLoggerService }
    , BudgetsApiService
    , AccountsApiService
    , PayeessApiService
    , httpInterceptorProviders
  ]
})
export class CoreModule { }
