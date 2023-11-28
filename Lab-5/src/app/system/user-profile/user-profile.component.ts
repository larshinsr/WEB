import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userName = 'Test test';
  userEmail = 'test@test.test';
  editMode = false;

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    // Implement logic to save changes to the backend (e.g., API call)
    this.toggleEditMode();
  }

  cancelEdit() {
    // Reset form fields or perform any necessary cleanup
    this.toggleEditMode();
  }
}
