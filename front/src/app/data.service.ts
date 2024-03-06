import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  showTaskSidebar = false;

  toggleTaskSidebar(): void {
    this.showTaskSidebar = !this.showTaskSidebar;
    console.log(this.showTaskSidebar);
  }
  getTaskSidebar(): boolean {
    return this.showTaskSidebar;
  }
}
