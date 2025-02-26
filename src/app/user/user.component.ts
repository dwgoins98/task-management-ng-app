import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from '../ui/card/card.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Decorator method
  // @Input({ required: true }) user!: User;
  // @Input({required: true}) selected!: boolean
  // @Output() select = new EventEmitter<string>();

  // Signal Approach
  user = input.required<User>();
  select = output<string>()

  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });

  // public get imagePath(): string {
  //   return 'assets/users/' + this.user.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
