import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit, OnDestroy {
  userSelected: any;
  selectedRole: string = 'All'; // Valeur par défaut
  users: any = []
  private subscriptions: Subscription[] = [];
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const sub = this.userService.getAllUsers().subscribe((data) => {
      console.log(data);
      this.users = data
    })
    this.subscriptions.push(sub);
  }

  Edit(id: any) {
    this.router.navigate([`editUser/${id}`])
  }

  Delete(id: any) {
    const sub = this.userService.deleteUser(id).subscribe((data) => {
      console.log('data from be', data);
      this.userService.getAllUsers().subscribe((data) => {
        this.users = data;
      });
    });
    this.subscriptions.push(sub);
  }

  fillUserSelected(userSelected: any) {
    this.userSelected = userSelected;
  }

  updateUserRole(): void {
    const sub = this.userService.setUserRole(this.userSelected.id, this.selectedRole).subscribe({
      next: (data) => {
        console.log('Update role', data);
        alert('Role updated successfully!');
      },
      error: (error) => {
        console.error('Error updating role:', error);
        alert('Failed to update role. Please try again.');
      },
      complete: () => {
        console.log('Role update operation completed.');
      }
    });

    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
