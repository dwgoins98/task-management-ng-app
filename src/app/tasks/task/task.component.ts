import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type Task } from "./task.model";
import { CardComponent } from "../../ui/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) task!: Task
  @Output() complete = new EventEmitter <string>()

  onCompleteTask() {
    this.complete.emit(this.task.id)
  }
}
