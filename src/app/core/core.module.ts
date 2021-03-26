import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger/logger.service';
import { ConsoleLoggerService } from './logger/console-logger/console-logger.service';
import { AuthService } from './auth/auth.service';
import { MoneyAuthService } from './auth/money-auth/money-auth.service';
import { httpInterceptorProviders } from './http/interceptors'


@NgModule({
  declarations: [],
  providers: [
    { provide: LoggerService, useClass: ConsoleLoggerService },
    { provide: AuthService, useClass: MoneyAuthService },
    httpInterceptorProviders
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
