import { Component } from '@angular/core';
import { AddTaskButtonComponent } from '../../components/molecules/add-task-button/add-task-button.component';
import { TaskComponent } from '../../components/molecules/task/task.component';
import { TitleComponent } from '../../components/molecules/title/title.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [
    TaskComponent,
    AddTaskButtonComponent,
    TitleComponent,
    CommonModule,
  ],
  templateUrl: './upcoming.component.html',
})
export class UpcomingComponent {}
