import { Component, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { AddTaskButtonComponent } from '../../components/molecules/add-task-button/add-task-button.component';
import { TaskComponent } from '../../components/molecules/task/task.component';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-sidebar-task',
  standalone: true,
  imports: [CommonModule, AddTaskButtonComponent, TaskComponent, ChipModule],
  templateUrl: './sidebar-task.component.html',
})
export class SidebarTaskComponent {
  constructor(private dataService: DataService) {}

  showTaskSidebar() {
    return this.dataService.showTaskSidebar;
  }
}
