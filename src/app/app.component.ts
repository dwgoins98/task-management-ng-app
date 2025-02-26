import { Component } from '@angular/core';
import { dummyUsers } from './user/dummyUsers';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';
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
