import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit {

  openMenu: boolean;

  constructor() {
  }

  ngOnInit() {
    this.openMenu = false;
  }

  toggle() {
    let bodyElement = <HTMLBodyElement>document.querySelector('body');
    if (this.openMenu === false) {
      this.openMenu = true;

      // this is nasty, get rid of it eventually
      bodyElement.style.overflow = 'hidden';
    } else {
      this.openMenu = false;
      bodyElement.style.overflow = 'auto';
    }
  }

}
