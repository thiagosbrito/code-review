import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';

@Injectable() // Error: no providerIn configuration provided, in this case it should be root
export class UserService {
  constructor() { }

  getUsers(): Observable<Array<User>> {
    return of([])
  }
}
