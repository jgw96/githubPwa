import { provideRouter, RouterConfig } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { MainComponent } from './main/main.component';

const routes: RouterConfig = [
    { path: '', component: MainComponent},
    { path: 'users', component: UsersComponent}
];

export const appRouterProviders = [
  provideRouter(routes)
];
