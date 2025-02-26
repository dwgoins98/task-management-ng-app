import { Component } from '@angular/core';
import { dummyUsers } from './user/dummyUsers';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user.model';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from "./user/users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = dummyUsers;
  selectedUserId?: string;

  public get selectedUser(): User {
    const returnedUser = this.users.find(
      (user) => user.id === this.selectedUserId
    )!;

    return returnedUser;
  }

  onSelectUser(id: string): string {
    return (this.selectedUserId = id);
    // console.log('App Component: ' + this.selectedUser.id)
  }
}
