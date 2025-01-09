import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';

import { dummyUsers } from './dummyUsers';




@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

// Decorator method
  @Input({required: true}) id!:string
  @Input({required: true}) avatar!:string
  @Input({required: true}) name!:string
  @Output() select = new EventEmitter<string>()

// Signal Approach
  // avatar = input.required<string>()
  // name = input.required<string>()
  // select = output<string>()

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar
  // })
  
  public get imagePath() : string {
    return 'assets/users/' + this.avatar
  }
  
  onSelectUser() {
    this.select.emit(this.id)
  }

}
