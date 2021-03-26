import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { API_URL_CONFIG } from './api-urls.config';
import { ApiService } from './api.service';
import { Budget } from '../models';


@Injectable()
export class BudgetsApiService extends ApiService {

    private readonly budgetsUrl =
        API_URL_CONFIG.BUDGETS_URL;


    public getBudgets(): Observable<Budget[]> {

        return this.http
            .get<any>(this.budgetsUrl)
            .pipe<Budget[]>(map((response) => response.data.budgets))
            .pipe(catchError(this.handleError));
    }
}