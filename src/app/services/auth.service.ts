import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserLoginDto } from '../models/user-login.dto';

// Service pour la gestion de l'authentification
@Injectable({
  providedIn: 'root' // Service disponible dans toute l'application
})
export class AuthService {
  private apiUrl = `${environment.apiBaseUrl}/auth`; // URL de l'API d'authentification

  constructor(private http: HttpClient) {}

  // Méthode pour connecter un utilisateur
  login(userLoginDto: UserLoginDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, userLoginDto);
  }

  // Méthode pour récupérer le rôle de l'utilisateur
  getUserRole(): Observable<string | null> {
    const token = localStorage.getItem('token'); // Récupère le token
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); // Décode le payload du token
      console.log('Token payload:', payload);

      //return of(payload.role); // Retourne le rôle de l'utilisateur   // retourne undefined correction ligne au dessous ca retourne (User role)
      return of(payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
    }
    return of(null); // Retourne null si pas de token
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): Observable<void> {
    localStorage.removeItem('token'); // Supprime le token
    return new Observable<void>(observer => {
      observer.next(); // Notifie la déconnexion
      observer.complete(); // Termine l'Observable
    });
  }
}
