import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('assets/users.json');
  }

  getUser(): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/1');
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', user);
  }
}
