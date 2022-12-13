import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  id: number = 3;
  private user: User = {
    'id': 2,
    'name': 'Alina Cernovschi',
    'username': 'Vasilica1',
    // 'email': 'vasilica.cernovschi@april.biz',
    // 'address': {
    //   'street': 'Kulas Light',
    //   'suite': 'Apt. 556',
    //   'city': 'Moara',
    //   'zipcode': '92998-3874',
    //   'geo': {
    //     'lat': '-37.3159',
    //     'lng': '81.1496'
    //   }
    // },
    // 'phone': '1-770-736-8031 x56442',
    // 'website': 'alina.org',
    // 'company': {
    //   'name': 'MindIt',
    //   'catchPhrase': 'Multi-layered client-server neural-net',
    //   'bs': 'harness real-time e-markets'
    // }
  }
  
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.onGetUsers();
    //this.onGetUser();
    //this.onCreateUser();
    //this.onUpdateUser();
    //this.onPatchUser();
    this.onDeleteUser();
  }

  onGetUsers() {
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    )
  }

  onGetUser() {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    )
  }

  onCreateUser() {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating users')
    )
  }

  onUpdateUser() {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done updating users')
    )
  }

  onPatchUser() {
    this.userService.patchUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done patching users')
    )
  }

  onDeleteUser() {
    this.userService.deleteUser(this.id).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done delete users')
    )
  }
}
