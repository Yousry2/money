import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {


    const modifiedReq = req.clone({
      headers: this.addExtraHeaders(req.headers)
    });

    return next.handle(modifiedReq);
  }

  private addExtraHeaders(headers: HttpHeaders): HttpHeaders {
    const newHeader = headers.append('Authorization', 'bearer c29b76316014cd70feebecd0546d3c9e618e27bb1dedffd7e4bb17660187fed3');
    return newHeader;
  }
}