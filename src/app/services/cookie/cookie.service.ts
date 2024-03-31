import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class cookieService {

  constructor(private _cookieService: CookieService) { }

  public tokenExists(): boolean {
    return this._cookieService.check('token');
  }

  public get(): string {
    if (this.tokenExists()) {
      return this._cookieService.get('token');
    }
    return '';
  }

  public create(token:any) {
    this._cookieService.set('token', token, 10, '/')
  }

}
