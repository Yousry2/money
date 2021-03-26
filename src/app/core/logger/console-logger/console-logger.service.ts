// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from '../logger.service';
import { LogMessage } from '../log-message'

@Injectable()

//export let isDebugMode = environment.isDebugMode;

@Injectable()
export class ConsoleLoggerService implements LoggerService {

  public info(message: LogMessage): void {
    console.info(message.text);
  }

  public log(message: LogMessage): void {
    console.log(message.text);
  }

  public warn(message: LogMessage): void {
    console.warn(message.text);
  }

  public error(message: LogMessage): void {
    console.error(message.text);
  }

  debug(message: LogMessage): void {
    return console.debug(message.text);
  }


}
