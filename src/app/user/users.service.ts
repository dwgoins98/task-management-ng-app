import { Injectable } from '@angular/core';
import { User } from './user.model';
import { dummyUsers } from './dummyUsers';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public get users(): User[] {
    return dummyUsers;
  }
}
