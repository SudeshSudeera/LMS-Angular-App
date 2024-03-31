import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url = 'http://localhost:8089/api/v1/users/';

  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<any> {

    const body = new HttpParams()
      .set("username", email)
      .set("password", password);

    const headers =  new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.url+"login", body, {headers})
  }

  public register(email: string, password: string, firstName:any,lastName:any): Observable<any> {
    return this.http.post(this.url+"create", {
      email:email,
      password:password,
      username:email,
      firstName:firstName,
      lastName:lastName
    })
  }
}
