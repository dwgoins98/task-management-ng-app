import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);

  // Not Signal Method
  newTitle: string = '';
  newSummary: string = '';
  newDueDate: string = '';

  // Signal method
  // newTitle = signal('')
  // newSummary = signal('')
  // newDueDate = signal('')

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.newTitle,
        summary: this.newSummary,
        dueDate: this.newDueDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
