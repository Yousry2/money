// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from '../logger.service';
import { LogMessage } from '../log-message'

@Injectable()

//export let isDebugMode = environment.isDebugMode;

@Injectable()
export class ConsoleLoggerService implements LoggerService {

  info(message: LogMessage) {
    return console.info(message.text);
  }

  log(message: LogMessage) {
    return console.log(message.text);
  }  

  warn(message: LogMessage) {
    return console.warn(message.text);
  }
  
  error(message: LogMessage) {
    return console.error(message.text);
  }

  debug(message: LogMessage) {
    return console.debug(message.text);
  }


}
