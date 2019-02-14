import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'localhost:300/API';

  constructor(private http: HttpClient) {   }

  getUsers(){
    return this.http.get('${this.API_URI}/users');
  }

  getUser(id: string){
    return this.http.get('${this.API_URI}/users/${id}');
  }

  saveUser(){
    
  }
}
