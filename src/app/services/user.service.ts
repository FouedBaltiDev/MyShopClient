import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserRegistrationDto } from '../models/user-registration.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiBaseUrl}/users`;

  constructor(private http: HttpClient) {}

  register(user: UserRegistrationDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
