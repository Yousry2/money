import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { API_URL_CONFIG } from './api-urls.config';
import { ApiService } from './api.service';
import { Budget, AccountDetails } from '../models';


@Injectable()
export class AccountsApiService extends ApiService {

    private readonly accountsUrl =
        API_URL_CONFIG.ACCOUNT_URL;

    private readonly budgetsUrl =
        API_URL_CONFIG.BUDGETS_URL;


    public getAccounts(budgetId: string): Observable<Account[]> {
        return this.http
            .get<any>(this.budgetsUrl + '/' + budgetId + '/' + this.accountsUrl)
            .pipe<Account[]>(map((response) => response.data.accounts))
            .pipe(catchError(this.handleError));
    }

    public createAccount(budgetId: string, accountDetails: AccountDetails): Observable<Account> {
        return this.http
            .post<any>(this.budgetsUrl + '/' + budgetId + '/' + this.accountsUrl, {"account" :accountDetails})
            .pipe<Account>(map((response) => response.data.account))
            .pipe(catchError(this.handleError));
    }
}