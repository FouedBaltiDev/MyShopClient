import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.checkUserRole();
  }

  signOut(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']); // Rediriger vers la page de connexion après la déconnexion
    });
  }

  private checkUserRole(): void {
    this.authService.getUserRole().subscribe({
      next: (role) => {
        this.isAdmin = (role === 'Admin');
        // Si le rôle est null, ne rien faire ou ajouter une action spécifique si nécessaire
      },
      error: () => {
        this.router.navigate(['/unauthorized']); // Rediriger en cas d'erreur lors de la récupération du rôle
      }
    });
  }
}
