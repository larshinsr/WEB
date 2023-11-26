import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { User } from '../shared/models/user.module';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: any[] = [];
  currentUser: User | null = null;
  editTaskId: number | null = null; // ID задачи для редактирования
  newTask: string = ''; // Для новой задачи
  editTaskDesc: string = ''; // Для редактирования описания задачи


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadCurrentUser();
    this.loadUserTasksByEmail();
  }

  loadCurrentUser(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.currentUser = JSON.parse(userString) as User;
    }
  }

  loadUserTasksByEmail(): void {
    if (this.currentUser && this.currentUser.email) {
      this.dataService.getUserTasksByEmail(this.currentUser.email).subscribe(tasks => {
        this.tasks = tasks;
      });
    }
  }

  // Методы для добавления и удаления задач...
  addTask(): void {
    if (!this.newTask) return;
    const task = { description: this.newTask, userEmail: this.currentUser?.email };
    this.dataService.addTask(task).subscribe(newTask => {
      this.tasks.push(newTask);
      this.newTask = '';
    });
  }

  deleteTask(taskId: number): void {
    this.dataService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    });
  }

  startEdit(taskId: number, description: string): void {
    this.editTaskId = taskId;
    this.editTaskDesc = description;
  }

  saveEdit(): void {
    if (!this.editTaskDesc) return;
    const updatedTask = { id: this.editTaskId, description: this.editTaskDesc, userEmail: this.currentUser?.email };
    this.dataService.updateTask(updatedTask).subscribe(updated => {
      const index = this.tasks.findIndex(task => task.id === this.editTaskId);
      if (index !== -1) {
        this.tasks[index] = updated;
      }
      this.editTaskId = null;
    });
  }

  cancelEdit(): void {
    this.editTaskId = null;
  }
}
