import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CheckboxModule],
  templateUrl: './task.component.html',
})
export class TaskComponent {}
