import { RouterModule, Routes } from '@angular/router';

import { TopicsComponent } from './topics.component';

const routes: Routes = [
  {
    path: '',
    component: TopicsComponent,
  },
];

export const RoutingModule = RouterModule.forChild(routes);
