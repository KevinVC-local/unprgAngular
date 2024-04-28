import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public loginUser(): Observable<UserModel> {
    return this.httpClient.get<UserModel>(`${environment.apiAuth}/character/1`)
  }

  get(key: string) {
    const dataStorage = localStorage.getItem(key);
    if (dataStorage) {
      return JSON.parse(dataStorage)
    } else {
      return null;
    }
  }

  set(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
