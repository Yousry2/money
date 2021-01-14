import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { apiUrlsConfig } from './api-urls.config';
import { apiService } from './api.service';
import { Budget } from '../models';


@Injectable()
export class AccountsApiService extends apiService {

    private readonly accountsUrl =
        apiUrlsConfig.accountsUrl;

        private readonly budgetsUrl =
        apiUrlsConfig.budgetsUrl;


    public getAccounts(budgetId: string): Observable<Account[]> {
        return this.http
            .get<any>(this.budgetsUrl +'/'+budgetId+'/'+this.accountsUrl)
            .pipe<Account[]>(map((response) => response.data.accounts))
            .pipe(catchError(this.handleError));
    }
}