import { Component, Input} from '@angular/core';

import { dummyUsers } from './dummyUsers';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) avatar!:string
  @Input({required: true}) name!:string

  
  public get imagePath() : string {
    return 'assets/users/' + this.avatar
  }
  
  onSelectUser() {
    
  }

}
