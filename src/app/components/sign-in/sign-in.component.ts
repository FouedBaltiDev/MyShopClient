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

        // Rediriger vers une page appropriée après connexion
        this.router.navigate(['/home']);
        Swal.fire('Successful login user...', 'Thank you !', 'success')
      },
      error: (err) => {
        // Gestion de la réponse d'erreur
        console.error('Error during login:', err);
        Swal.fire('Login Failed', 'Incorrect username or password.<br><br>Please try again.', 'error');

      }
    });
  }
}
