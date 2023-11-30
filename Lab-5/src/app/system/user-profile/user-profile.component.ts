import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { User } from 'src/app/shared/models/user.module';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: User | null = null;
  editNameMode: boolean = false;
  newName: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.currentUser = JSON.parse(userString) as User;
    }
  }
  startNameEdit(): void {
    this.editNameMode = true;
    this.newName = this.currentUser ? this.currentUser.name : '';
  }

  saveName(): void {
    if (this.currentUser && this.currentUser.id !== undefined && this.newName !== null && this.newName.trim() !== '') {
      this.currentUser.name = this.newName;
      this.dataService.updateUserName(this.currentUser).subscribe(response => {
        if (response.success) {
          if (this.currentUser) {
            this.currentUser.name = this.newName;
  
            // Получаем существующего пользователя из localStorage
            const storedUserString = localStorage.getItem('user');
            if (storedUserString !== null) {
              const storedUser = JSON.parse(storedUserString);
              if (storedUser) {
                // Обновляем только имя пользователя
                storedUser.name = this.newName;
                // Сохраняем обновленного пользователя целиком
                localStorage.setItem('user', JSON.stringify(storedUser));
              }
            }
          }
        }
      });
  
      this.editNameMode = false;
    }
  }

  cancelNameEdit(): void {
    this.editNameMode = false;
    this.newName = '';
  }
}
