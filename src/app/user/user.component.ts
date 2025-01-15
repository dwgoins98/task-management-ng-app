import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';

import { type User } from "./user.model";
import { CardComponent } from "../ui/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Decorator method
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean
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
