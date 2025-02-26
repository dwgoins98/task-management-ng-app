import {
  Component,
  EventEmitter,
  inject,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  userId = input.required<string>();

  private tasksService = inject(TasksService);

  // Decorator method
  // newTitle: string = '';
  // newSummary: string = '';
  // newDueDate: string = '';

  // Signal method
  newTitle = signal('');
  newSummary = signal('');
  newDueDate = signal('');

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.newTitle(),
        summary: this.newSummary(),
        dueDate: this.newDueDate(),
      },
      this.userId()
    );
    this.close.emit();
  }
}
