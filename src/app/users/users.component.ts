import { Component, OnInit } from '@angular/core';
import { Control } from '@angular/common';
import 'rxjs/add/operator/debounceTime';

import { GithubService } from '../github.service';

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  providers: [GithubService]
})
export class UsersComponent implements OnInit {

  users: any[];
  searchTermControl: Control;
  searchTerm: string;

  constructor(private github: GithubService) {
     this.searchTerm = '';
     this.searchTermControl = new Control();

     this.searchTermControl.valueChanges
      .debounceTime(500)
      .subscribe(value => {
        this.github.getData(`https://api.github.com/search/users?q=${value}&sort=followers&order=desc`).subscribe(
          data => {
            this.users = data.items;
          },
          err => console.error(err)
        );
      });
  }

  ngOnInit() {
    this.github.getData('https://api.github.com/search/users?q=brad&sort=followers').subscribe(
      data => {
        console.log(data);
        this.users = data.items;
      },
      err => {
        console.error(err);
      }
    );
  }

  open(url: string) {
    window.open(url);
  }

}
