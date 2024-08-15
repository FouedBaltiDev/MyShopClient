import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserRegistrationDto } from '../../models/user-registration.dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: UserRegistrationDto = {
    UserName: '',
    Email: '',
    Password: ''
  };

  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    if (this.user.Password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.userService.register(this.user).subscribe({
      next: (response) => {
        // Handle successful response
        this.successMessage = 'User registered successfully. Redirecting to login page...';
        setTimeout(() => {
          this.router.navigate(['/login']); // Redirection après l'affichage du message
        }, 3000); // Attendre 3 secondes avant de rediriger
      },
      error: (err) => {
        // Handle error response
        console.error('Error during registration:', err);
        this.errorMessage = 'Error during registration: ' + err.message; // Update the error message

      }
    });
  }
  onInputChange(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }
}
