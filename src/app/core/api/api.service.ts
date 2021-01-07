import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { apiUrlsConfig } from './api-urls.config';
import { LoggerService } from '../logger/logger.service';


@Injectable()
export class apiService {

    constructor(public  http: HttpClient, private loggerService : LoggerService) { }


    public  handleError(error: HttpErrorResponse) {
      //  this.loggerService.log(error.message);
        let message: string;
        let statusCode: number;
        // if (error instanceof ErrorEvent) {
        //     message = error.message ? error.error.message : error.toString();
        // } else {
            const err = error.error || JSON.stringify(error);
            statusCode = error.status;
            message = err;
      //  }
        return throwError(error);
    }
}