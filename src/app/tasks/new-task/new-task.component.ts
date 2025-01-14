import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData} from '../task/task.model';


@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>()

  exampleTaskId = 4

// Not Signal Method
  newTitle: string = ""
  newSummary: string = ""
  newDueDate: string = ""

// Signal method
  // newTitle = signal('')
  // newSummary = signal('')
  // newDueDate = signal('')

  onCancel(){
    this.cancel.emit()
  }

  onSubmit(){
    
    this.add.emit({
      title: this.newTitle,
      summary: this.newSummary,
      dueDate: this.newDueDate
    })

  }

}
