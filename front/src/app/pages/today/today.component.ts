import { Component } from '@angular/core';
import { AddTaskButtonComponent } from '../../components/molecules/add-task-button/add-task-button.component';
import { TaskComponent } from '../../components/molecules/task/task.component';

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [TaskComponent, AddTaskButtonComponent],
  templateUrl: './today.component.html',
})
export class TodayComponent {}
