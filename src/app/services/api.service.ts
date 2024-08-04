import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = `${environment.apiBaseUrl}/api`; // URL API

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/orders`);
  }

  // Ajoutez d'autres méthodes pour interagir avec l'API
}
