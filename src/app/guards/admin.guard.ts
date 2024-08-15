import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Guard pour protéger les routes réservées aux administrateurs
@Injectable({
  providedIn: 'root' // Disponible dans toute l'application
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // Vérifie si l'utilisateur peut accéder à une route protégée
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getUserRole().pipe(
      map(role => {
        console.log('User role:', role); // Vérifie le rôle utilisateur
        if (role === 'Admin') {
          return true; // Accès autorisé si Admin
        } else {
          this.router.navigate(['/unauthorized']); // Redirection si non autorisé
          return false;
        }
      }),
      catchError(() => {
        // En cas d'erreur, redirection vers la page non autorisée
        this.router.navigate(['/unauthorized']);
        return of(false);
      })
    );
  }
}
