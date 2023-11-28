import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { User } from 'src/app/shared/models/user.module';
import { Task } from 'src/app/shared/models/task.model';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  tasks: Task[] = [];
  currentUser: User | null = null;
  editTaskId: number | null| undefined = null; // ID задачи для редактирования
  newTaskDesc: string = ''; // Для новой задачи
  newTaskDeadline: string = ''; // Для дедлайна новой задачи
  editTaskDesc: string = ''; // Для редактирования описания задачи

  constructor(private dataService: DataService, ) {}

  ngOnInit(): void {
    this.loadCurrentUser();
    this.loadUserTasksByEmail();
    if (this.currentUser) {
      console.log(this.dataService.getUserName(this.currentUser.email))}
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

  addTask(): void {
    if (!this.newTaskDesc) return;
    const newTask = new Task(
      null, // ID будет присвоен на сервере
      this.newTaskDesc, 
      this.currentUser?.email || '', 
      new Date(this.newTaskDeadline), 
      false // Статус выполнения задачи
    );
    this.dataService.addTask(newTask).subscribe(task => {
      this.tasks.push(task);
      this.newTaskDesc = '';
      this.newTaskDeadline = '';
    });
  }

  deleteTask(taskId: number|null|undefined): void {
    this.dataService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    });
  }

  startEdit(task: Task): void {
    this.editTaskId = task.id;
    this.editTaskDesc = task.description;
  }

  saveEdit(): void {
    if (!this.editTaskDesc || this.editTaskId === null) return;

    const taskToUpdate = this.tasks.find(task => task.id === this.editTaskId);
    if (taskToUpdate) {
      taskToUpdate.description = this.editTaskDesc;
      this.dataService.updateTask(taskToUpdate).subscribe(updated => {
        const index = this.tasks.findIndex(task => task.id === this.editTaskId);
        if (index !== -1) {
          this.tasks[index] = updated;
        }
        this.editTaskId = null;
        this.editTaskDesc = '';
      });
    }
  }

  cancelEdit(): void {
    this.editTaskId = null;
    this.editTaskDesc = '';
  }

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
  
    // Если задача стала завершенной, переместите ее в конец списка
    if (task.completed) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      this.tasks.push(task);
    } else {
      // Если задача была отмечена как незавершенная, переместите ее наверх списка
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        this.tasks.unshift(task);
      }
    }
  
    // Сохраните изменения в задаче на сервере
    this.dataService.updateTask(task).subscribe();
  }
  

  isNearDeadline(deadline: Date): boolean {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    const diff = deadlineDate.getTime() - now.getTime();
    return diff < (4 * 24 * 60 * 60 * 1000); // 4 дня в миллисекундах
  }
  showAddTaskForm: boolean = false; // Для отображения/скрытия формы добавления задачи

  // Метод для переключения состояния формы добавления задачи
  toggleAddTaskForm() {
    this.showAddTaskForm = !this.showAddTaskForm;
  }
  get sortedTasks() {
    return this.tasks.slice().sort((a, b) => {
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    });
  }

  // Метод для перемещения завершенных задач в конец списка
  reorderCompletedTask(task: Task) {
    if (task.completed) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      this.tasks.push(task);
    }
  }
}
