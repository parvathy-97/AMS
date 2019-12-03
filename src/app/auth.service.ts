import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './shared/login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public Login(userInfo:Login):Observable<any>
  {
    localStorage.setItem('ACCESS_TOKEN',"access_token")
  return this.http.get(environment.baseUrl+'/Logins?username='+userInfo.username+'&password='+userInfo.password);
  }

  public isLoggedIn()
  {
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }

  public isLoggedOut()
  {
    return localStorage.removeItem('ACCESS_TOKEN');
  }

}
