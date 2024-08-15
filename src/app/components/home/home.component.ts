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
  
  }

  signOut(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']); // Rediriger vers la page de connexion après la déconnexion
    });
  }
}
