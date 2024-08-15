import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserLoginDto } from '../../models/user-login.dto';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isAdmin: boolean = false;
  user: UserLoginDto = {
    userName: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.user).subscribe({
      next: (response) => {
        // Gestion de la réponse réussie, sauvegarde du jeton, etc.
        localStorage.setItem('token', response.token);

        Swal.fire('Successful login user...', 'Thank you !', 'success')

        this.checkUserRole();
      },
      error: (err) => {
        // Gestion de la réponse d'erreur
        console.error('Error during login:', err);
        Swal.fire('Login Failed', 'Incorrect username or password.<br><br>Please try again.', 'error');
      }
    });
  }


  private checkUserRole(): void {
    this.authService.getUserRole().subscribe({
      next: (role) => {
        this.isAdmin = (role === 'Admin');
        
        // Si le rôle est null, ne rien faire ou ajouter une action spécifique si nécessaire

        if (this.isAdmin) {
          this.router.navigateByUrl('/dashboard'); // Rediriger vers le dashboard pour l'administrateur
        } else {

          this.router.navigateByUrl('/user-home');  // Rediriger vers la page utilisateur normal
        }
      },
      error: () => {
        this.router.navigate(['/unauthorized']); // Rediriger en cas d'erreur lors de la récupération du rôle
      }
    });
  }
}
