import { RouterModule, Routes } from '@angular/router';

import { CurrentTopicComponent } from './current-topic.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentTopicComponent,
  },
];

export const RoutingModule = RouterModule.forChild(routes);
