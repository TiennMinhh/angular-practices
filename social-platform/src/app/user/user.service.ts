import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    { id: 1, name: 'Alice'},
    { id: 2, name: 'Bob' }
  ]
  
  constructor() { }

  getUsers() {
    return of(this.users);
  }
}
