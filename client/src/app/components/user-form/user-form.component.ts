import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../modules/User';
import { ActivatedRoute ,Router} from '@angular/router'

import {UsersService} from '../../services/users.service'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @HostBinding('class') clasese = "row";

  usr: any = {
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

  EsEditable = false;
  constructor(private userService : UsersService, private router: Router, private activatedRouter: ActivatedRoute) {
    
  }

  ngOnInit() {
    const params = this.activatedRouter.snapshot.params;
    console.log(params);
    if(params.id){
      this.userService.getUser(params.id)
        .subscribe(
          res =>{ 
            console.log(res);
            this.usr = res;
            this.EsEditable= true;
          },
          err => console.log(err)
          )
    }
  }

  

  saveUser()
  {
    delete this.usr.idUsr;
    delete this.usr.deletedby;
    delete this.usr.deletedon;
    delete this.usr.createdon;
    
    this.userService.saveUser(this.usr)
      .subscribe(
        res =>{
          console.log(res);
          this.router.navigate(['/users']);
        },
        err => console.log(err)
      )
    
    console.log(this.usr);
  }

  updateUser(){
    //delete this.usr.idUsr;
    delete this.usr.deletedby;
    delete this.usr.deletedon;
    delete this.usr.createdon;
    this.userService.updateUser(this.usr.idUsr,this.usr)
      .subscribe(
        res =>{
          console.log(res);
          this.router.navigate(['/users']);
        },
        err => console.log(err)
      )
  }

}
