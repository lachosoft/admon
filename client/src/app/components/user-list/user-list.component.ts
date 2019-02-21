import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router'

import {UsersService} from '../../services/users.service';
import {User} from '../../modules/User'
/*import { ConsoleReporter } from 'jasmine';*/

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any = [];

  @HostBinding("class")  clases ="row";
  
  constructor(private usersService: UsersService, private router: Router) { 

  }

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers(){
    this.usersService.getUsers().subscribe(
      res=> {
        this.users = res;
      },
      err=> console.log(err)
    );
  }

  deleteUser(id: string){
    this.usersService.deleteUser(id)
    .subscribe(
      res =>{
        console.log(res);
        this.getListUsers();
        //this.router.navigate(['users/']);

      },
      err => console.error(err)
    )
  }

  editUser(id: string){
    console.log(id);
  }

}
