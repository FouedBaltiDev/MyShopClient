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

  // Méthode pour enregistrer un nouvel utilisateur
  register(user: UserRegistrationDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Méthode pour authentifier un utilisateur
  login(user: { userName: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  // Méthode pour ajouter un nouvel utilisateur (admin seulement)
  addUser(user: UserRegistrationDto): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // Méthode pour récupérer tous les utilisateurs
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Méthode pour récupérer un utilisateur par ID
  getById(id: string): Observable<UserRegistrationDto> {
    return this.http.get<UserRegistrationDto>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour modifier un utilisateur existant
  editUser(id: string, userData: UserRegistrationDto): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, userData);
  }

  // Méthode pour supprimer un utilisateur par ID
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

   // Method to set the user's role
   setUserRole(userId: string, role: string): Observable<any> {
    const body = { userId: userId, newRole: role };
    return this.http.post(`${this.apiUrl}/updateRole`, body);
  }
}
