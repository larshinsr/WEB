import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUserTasksByEmail(email: string): Observable<any[]> {
    // Предполагается, что ваши задачи имеют поле email для связи с пользователем
    return this.http.get<any[]>(`${this.apiUrl}/tasks?userEmail=${email}`);
  }

  // Другие методы для работы с задачами...
  addTask(task: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/tasks`, task);
  }
  
  deleteTask(taskId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tasks/${taskId}`);
  }
  
  updateTask(task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/tasks/${task.id}`, task);
  }
}
