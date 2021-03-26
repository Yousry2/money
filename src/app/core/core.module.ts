import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger/logger.service';
import { ConsoleLoggerService } from './logger/console-logger/console-logger.service';



@NgModule({
  declarations: [],
  providers: [{ provide: LoggerService, useClass: ConsoleLoggerService }],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
