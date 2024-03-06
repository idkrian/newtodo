import { Component } from '@angular/core';
import { AddTaskButtonComponent } from '../../components/molecules/add-task-button/add-task-button.component';
import { TaskComponent } from '../../components/molecules/task/task.component';
import { TitleComponent } from '../../components/molecules/title/title.component';

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [TaskComponent, AddTaskButtonComponent, TitleComponent],
  templateUrl: './today.component.html',
})
export class TodayComponent {}
