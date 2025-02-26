import { Component, inject } from '@angular/core';

import { UsersService } from './users.service';
import { UserComponent } from './user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  imports: [UserComponent],
})
export class UsersComponent {
  private usersService = inject(UsersService);
  users = this.usersService.users;
}
