import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USERS_KEY = 'registeredUsers';
  private readonly CURRENT_USER_KEY = 'currentUser';

  constructor() {}

  private loadUsers(): Map<string, string> {
    const usersJson = localStorage.getItem(this.USERS_KEY);
    return usersJson ? new Map(JSON.parse(usersJson)) : new Map();
  }

  private saveUsers(users: Map<string, string>) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(Array.from(users.entries())));
  }

  register(username: string, password: string): boolean {
    const users = this.loadUsers();
    if (users.has(username)) {
      return false;
    }
    users.set(username, password);
    this.saveUsers(users);
    return true;
  }

  login(username: string, password: string): boolean {
    const users = this.loadUsers();
    const storedPassword = users.get(username);
    if (storedPassword === password) {
      localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify({ username }));
      return true;
    }
    return false;
  }

  getUser() {
    const userJson = localStorage.getItem(this.CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }

  logout() {
    localStorage.removeItem(this.CURRENT_USER_KEY);
  }
}
