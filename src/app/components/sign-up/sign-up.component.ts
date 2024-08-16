import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserRegistrationDto } from '../../models/user-registration.dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: UserRegistrationDto = {
    UserName: '',
    Email: '',
    Password: ''
  };

  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  userId: string | null = null;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');

    if (this.userId) {
      // Mode édition : Charger les données de l'utilisateur
      this.userService.getById(this.userId).subscribe(user => {
        console.log('User data:', user); // Ajoutez ce log pour vérifier les données reçues
        this.user = {
          UserName: user.UserName,
          Email: user.Email,
          Password: '' // Ne pas pré-remplir le mot de passe
        };
      });
    }
  }

  onSubmit(): void {
    if (this.user.Password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    if (this.userId) {
      // Mise à jour de l'utilisateur
      this.userService.editUser(this.userId, this.user).subscribe({
        next: (response) => {
          this.successMessage = 'User updated successfully. Redirecting to user management page...';
          setTimeout(() => {
            this.router.navigate(['/user-management']); // Redirection après l'affichage du message
          }, 3000);
        },
        error: (err) => {
          console.error('Error during update:', err);
          this.errorMessage = 'Error during update: ' + err.message;
        }
      });
    } else {
      // Inscription d'un nouvel utilisateur
      this.userService.register(this.user).subscribe({
        next: (response) => {
          this.successMessage = 'User registered successfully. Redirecting to login page...';
          setTimeout(() => {
            this.router.navigate(['/login']); // Redirection après l'affichage du message
          }, 3000);
        },
        error: (err) => {
          console.error('Error during registration:', err);
          this.errorMessage = 'Error during registration: ' + err.message;
        }
      });
    }
  }

  onInputChange(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }
}
