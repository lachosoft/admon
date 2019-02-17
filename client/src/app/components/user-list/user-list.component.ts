import { Component, OnInit, HostBinding } from '@angular/core';

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
  
  constructor(private usersService: UsersService) { 

  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      res=> {
        this.users = res;
      },
      err=> console.log(err)
    );
  }

}
