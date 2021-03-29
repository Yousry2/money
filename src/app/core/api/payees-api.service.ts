import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { API_URL_CONFIG } from './api-urls.config';
import { ApiService } from './api.service';
import { Budget, Payee } from '../models';


@Injectable()
export class PayeessApiService extends ApiService {

    private readonly budgetsUrl =
        API_URL_CONFIG.BUDGETS_URL;

    private readonly payeesUrl =
        API_URL_CONFIG.PAYEES_URL;

    public getPayees(budgetId: string): Observable<Payee[]> {
        return this.http
            .get<any>(`${this.budgetsUrl}/${budgetId}/${this.payeesUrl}`)
            .pipe<Payee[]>(map((response) => response.data.payees))
            .pipe(catchError(this.handleError));
    }
}