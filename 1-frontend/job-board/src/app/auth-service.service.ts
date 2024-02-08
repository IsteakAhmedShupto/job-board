import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    // console.log(data);
    return this.http.post(`http://127.0.0.1:8000/api/users/login`, data);
  }
}
