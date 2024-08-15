import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router'; // Pour la redirection après la déconnexion

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private authService: AuthService, private router: Router) { }

  onSignOut() {
    this.authService.logout().subscribe(() => {
      // Redirection après la déconnexion
      this.router.navigate(['/login']);
    });
  }
}
