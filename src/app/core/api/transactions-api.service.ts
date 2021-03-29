import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { API_URL_CONFIG } from './api-urls.config';
import { ApiService } from './api.service';
import { Budget, Payee, Transaction } from '../models';


@Injectable()
export class TransactionsApiService extends ApiService {

    private readonly budgetsUrl =
        API_URL_CONFIG.BUDGETS_URL;

    private readonly payeesUrl =
        API_URL_CONFIG.PAYEES_URL;

    private readonly transactionsUrl =
        API_URL_CONFIG.TRANSACTIONS_URL;

    public getPayeesTransactions(budgetId: string, payeeId: string): Observable<Transaction[]> {
        return this.http
            .get<any>(`${this.budgetsUrl}/${budgetId}/${this.payeesUrl}/${payeeId}/${this.transactionsUrl}`)
            .pipe<Transaction[]>(map((response) => response.data.transactions))
            .pipe(catchError(this.handleError));
    }
}