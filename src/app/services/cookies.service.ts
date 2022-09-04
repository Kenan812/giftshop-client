import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookieService: CookieService) { }

  public getCookie(name: string) {
    console.log(this.cookieService.get(name));
    return this.cookieService.get(name);
  }

  public deleteCookie(cookieName:string) {
    this.cookieService.delete(cookieName);
  }

  public setCookie(params:any) {
    let expireDate : Date = new Date();
    this.cookieService.set(params.name, params.value, expireDate.
      setTime(expireDate.getTime()+(params.expireDays ? params.expireDays : 1) *24*60*60*1000));
  }

}
