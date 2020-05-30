import { NgModule } from '@angular/core';

import { ShareModule } from '../share/share.module';

import { TopicsComponent } from './topics.component';
import { RoutingModule } from './topics.routes';

@NgModule({
  declarations: [TopicsComponent],
  imports: [ShareModule, RoutingModule],
})
export class TopicsModule {}
