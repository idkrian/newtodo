import { Component } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-add-task-button',
  standalone: true,
  imports: [],
  templateUrl: './add-task-button.component.html',
})
export class AddTaskButtonComponent {
  constructor(private dataService: DataService) {}

  toggle() {
    this.dataService.toggleTaskSidebar();
  }
}
