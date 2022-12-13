import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const myHeaders = new HttpHeaders({'myheader': 'headervalue'});
    return this.http.get<User[]>('assets/users.json', {headers: myHeaders});
  }

  getUser(): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/1');
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
  }

  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
