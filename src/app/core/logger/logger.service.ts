// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { LogMessage } from './log-message';


@Injectable()
export abstract class LoggerService {

  public abstract info(message: LogMessage): void;
  public abstract warn(message: LogMessage): void;
  public abstract error(message: LogMessage): void;
  public abstract debug(message: LogMessage): void;
  public abstract log(message: LogMessage): void;

}
