import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'タスク管理';
  tasks: { name: string }[] = [
    { name: 'タスク１' },
    { name: 'タスク２' },
  ];
  task: string;

  constructor() { }

  addTask() {
    this.tasks.push({
      name: this.task
    });
    this.task = '';
  }

}
