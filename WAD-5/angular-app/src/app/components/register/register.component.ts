import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  register() {
    if (this.password === this.confirmPassword) {
      if (this.authService.register(this.username, this.password)) {
        this.message = 'Registration successful';
      } else {
        this.message = 'Username already exists';
      }
    } else {
      this.message = 'Passwords do not match';
    }
  }
}
