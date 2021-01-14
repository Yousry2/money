import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { apiUrlsConfig } from './api-urls.config';
import { apiService } from './api.service';
import { Budget, Payee } from '../models';


@Injectable()
export class PayeessApiService extends apiService {

    private readonly budgetsUrl =
        apiUrlsConfig.budgetsUrl;

        private readonly payeesUrl =
        apiUrlsConfig.payeesUrl;

        public getPayees(budgetId: string): Observable<Payee[]> {
            return this.http
                .get<any>(`${this.budgetsUrl}/${budgetId}/${this.payeesUrl}`)
                .pipe<Payee[]>(map((response) => response.data.payees))
                .pipe(catchError(this.handleError));
        }
}