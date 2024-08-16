import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users:any=[]
  constructor(private userService:UserService, private router :Router) { }

  //ajouter ondestroy ***BASSEM***
  ngOnInit(): void {

this.userService.getAllUsers().subscribe((data)=>{
  console.log(data);
this.users=data
})

  }

  Edit(id:any){
this.router.navigate([`editUser/${id}`])
  }

  Delete(id:any){
    this.userService.deleteUser(id).subscribe((data) => {
      console.log('data from be', data)
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data
    })

      });
  }

  setRole(id:number){
    this.router.navigate([`editUser/${id}`])
  }
}
