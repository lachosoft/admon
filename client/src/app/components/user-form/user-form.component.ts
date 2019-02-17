import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../modules/User';

import {UsersService} from '../../services/users.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @HostBinding('class') clasese = "row";

  usr: User = {
    idUsr : 0,
    nick : ``,
	  nombres : ``,
	  appaterno : ``,
	  apmaterno : ``,
	  email : ``,
    deleted : 0,
    deletedon : new Date(),
    deletedby : 0,
    createdon : new Date(),
	  createdby : 0
  };

  constructor(private userService : UsersService) {
    
  }

  ngOnInit() {
  }

  saveUser()
  {
    console.log(this.usr);
  }

}
