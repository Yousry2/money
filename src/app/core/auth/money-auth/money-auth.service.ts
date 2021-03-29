import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';




@Injectable()
export class MoneyAuthService implements AuthService {


  public static USER_ID = 'user-id';
  public static ACCESS_TOKEN = 'access-token';
  public static EXPIRES_AT = 'expires-at';
  public static EXPIRES_DURATION = 60;


  constructor(private router: Router) {
  }

  public login(): void { }

  public handleAuthentication(): void { }

  public setSession(authResult: any): void {
    // Set the time that the access token will expire at , by default session will expire after 1 hour of inactivity
    const expiresAt = MoneyAuthService.EXPIRES_DURATION * 60 * 1000 + new Date().getTime();
    localStorage.setItem(MoneyAuthService.ACCESS_TOKEN, authResult.accessToken);
    localStorage.setItem(MoneyAuthService.USER_ID, authResult.idToken);
    localStorage.setItem(MoneyAuthService.EXPIRES_AT, expiresAt.toString());
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem(MoneyAuthService.ACCESS_TOKEN);
    localStorage.removeItem(MoneyAuthService.USER_ID);
    localStorage.removeItem(MoneyAuthService.EXPIRES_AT);
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    const expiresAtToken = localStorage.getItem(MoneyAuthService.EXPIRES_AT);
    const accessToken = localStorage.getItem(MoneyAuthService.ACCESS_TOKEN);
    const expiresAt = JSON.parse(expiresAtToken || '{}');
    // check if the current time didn't exceed the sexxion expiry time
    if (accessToken != null && expiresAtToken != null && new Date().getTime() < expiresAt) {
      return true;
    }
    return false;
  }

}
