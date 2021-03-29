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
    const newHeader = headers.append('Authorization', 'bearer 1bfd98beecfcade0b0d60539e5124d4e47ccf3e24c63515f0f12fd720cf6f3a8');
    return newHeader;
  }
}