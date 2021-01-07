import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { apiUrlsConfig } from './api-urls.config';
import { apiService } from './api.service';
import { Budget } from '../models';


@Injectable()
export class BudgetsApiService extends apiService {

    private readonly budgetsUrl =
        apiUrlsConfig.budgetsUrl;


    public getBudgets(): Observable<Budget[]> {

        return this.http
            .get<any>(this.budgetsUrl)
            .pipe<Budget[]>(map((response) => response.data.budgets))
            .pipe(catchError(this.handleError));
    }
}