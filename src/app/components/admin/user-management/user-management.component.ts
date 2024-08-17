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

  setRole(userSelected: any) {
    this.userSelected = userSelected;
  }
  

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
