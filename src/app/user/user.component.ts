import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';

// type User = {
//   id: string
//   name: string
//   avatar: string
// }

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Decorator method
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();

  // Signal Approach
  // avatar = input.required<string>()
  // name = input.required<string>()
  // select = output<string>()

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar
  // })

  public get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
