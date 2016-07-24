import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MenuComponent } from './menu/menu.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MenuComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {

}
