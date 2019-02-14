import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../modules/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'localhost:3000/API';

  constructor(private http: HttpClient) {   }

  getUsers(){
    return this.http.get('${this.API_URI}/users');
  }

  getUser(id: string){
    return this.http.get('${this.API_URI}/users/${id}');
  }

  updateUser(id: string, user: User){
    return this.http.put('${this.API_URI}/users/${id}',user);
  }

  deleteUser(id: string){
    return this.http.delete('${API_URI}/users/${id}');
  }

  saveUser(user : User){
    return this.http.post('${this.AP_URI/users}',user);
  }
}
