import { Component } from '@angular/core';
import { AddTaskButtonComponent } from '../../components/molecules/add-task-button/add-task-button.component';
import { TaskComponent } from '../../components/molecules/task/task.component';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AddTaskButtonComponent, TaskComponent, SidebarMenuComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}
