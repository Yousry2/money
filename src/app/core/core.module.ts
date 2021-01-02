import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { LoggerService } from './logger/logger.service';
import { MoneyAuthService } from './auth/money-auth/money-auth.service';
import { ConsoleLoggerService } from './logger/console-logger/console-logger.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: AuthService, useClass: MoneyAuthService }
    , { provide: LoggerService, useClass: ConsoleLoggerService }
  ]
})
export class CoreModule { }
