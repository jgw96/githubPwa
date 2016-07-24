import { Component, OnInit } from '@angular/core';
import { Control } from '@angular/common';
import 'rxjs/add/operator/debounceTime';

import { GithubService } from '../github.service';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  providers: [GithubService]
})
export class MainComponent implements OnInit {

  repos: any[];
  searchTermControl: Control;
  searchTerm: string;

  constructor(private github: GithubService) {
    this.searchTerm = '';
    this.searchTermControl = new Control();

    this.searchTermControl.valueChanges
      .debounceTime(500)
      .subscribe(value => {
        this.github.getData(`https://api.github.com/search/repositories?q=${value}&sort=stars&order=desc`).subscribe(
          data => {
            this.repos = data.items;
          },
          err => console.error(err)
        );
      });
  }

  ngOnInit() {
    this.github.getData('https://api.github.com/search/repositories?q=javascript&sort=stars&order=desc').subscribe(
      data => {
        console.log(data.items);
        this.repos = data.items;
      },
      err => console.error(err)
    );
  }

  open(url: string) {
    window.open(url);
  }

}
