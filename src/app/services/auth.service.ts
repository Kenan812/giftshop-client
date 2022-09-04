import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ACCOUNT_URLS } from 'src/app/core/constants/urls'
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenService 
) { }

  public login(email: string, password: string) : Observable<any> {
    return this.http
      .post(`${environment.apiUrl}${ACCOUNT_URLS.LOGIN_URL}`, {email, password})
      .pipe(
        tap((response:any) => {
          this.tokenService.addTokenToCookies(this.getTokenFromResponse(response));
        }), catchError((error) =>  
          this.handleError(error)
        )
      );
  }

  private getTokenFromResponse(response:any) {
    return response.token === undefined ? response : response.token;
  }

  private handleError(httpErrorResponse : any) {
    let errorMessage: string = "";

    if (httpErrorResponse.error.errors !== undefined && httpErrorResponse.error.errors.Email[0] !== undefined)
      errorMessage = httpErrorResponse.error.errors.Email[0];
    else 
      errorMessage = httpErrorResponse.error;

    return throwError(() => errorMessage || "Error while login");
  }

  public checkIsAuthenticated() {
    const token = this.tokenService.getTokenFromCookies();
    return token !== null && token !== undefined && token !== '';
  }



}
