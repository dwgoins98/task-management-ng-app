import { Component, computed, signal } from '@angular/core';

import { dummyUsers } from './dummyUsers';

const randomIndex: number = Math.floor(Math.random()*dummyUsers.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = signal(dummyUsers[randomIndex])
  imagePath = computed(() => '/assets/users/' + this.selectedUser().avatar)

  onSelectUser() {
    const randomIndex: number = Math.floor(Math.random()*dummyUsers.length)
    this.selectedUser.set(dummyUsers[randomIndex])
  }

}
