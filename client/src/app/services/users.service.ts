import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../modules/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {   }

  getUsers(){
    //{this.API_URI}
    return this.http.get(`${this.API_URI}/users`);
  }

  getUser(id: string){
    return this.http.get(`${this.API_URI}/users/${id}`);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put(`${this.API_URI}/users/${id}`,user);
  }

  deleteUser(id: string){
    return this.http.delete(`${this.API_URI}/users/${id}`);
  }

  saveUser(user : User){
    return this.http.post(`${this.API_URI}/users`,user);
  }
}
