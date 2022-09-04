import { Injectable } from '@angular/core';
import { CookiesService } from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private CookiesService: CookiesService) { }

  public addTokenToCookies(token:string) {
    this.CookiesService.setCookie({name:"token", value:token});
  }

  public getTokenFromCookies() {
    this.CookiesService.getCookie("token");
  }

}
