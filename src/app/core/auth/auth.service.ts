// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';

@Injectable()
export abstract class AuthService {

  public login(): void {}

  public handleAuthentication(): void {}

  public setSession(authResult): void {}

  public logout(): void {}

  public abstract isAuthenticated(): boolean;
}
