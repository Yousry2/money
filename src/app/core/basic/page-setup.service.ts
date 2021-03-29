// src/app/auth/auth.service.ts

import { Injectable, EventEmitter } from '@angular/core';
import { Observable, from, of, Observer, BehaviorSubject } from 'rxjs';

@Injectable()

@Injectable()
export class PageSetupService {

    public pageNameChanged : EventEmitter<string> = new EventEmitter<string>();
    private pageName! : string;
    public pageName$ = this.pageNameChanged.asObservable();

    public setPageName(pageName: string): void {
        this.pageName = pageName;
        this.pageNameChanged.emit(pageName);
      }


    public getPageName(): Observable<string> {
        return this.pageName$;
    }


}