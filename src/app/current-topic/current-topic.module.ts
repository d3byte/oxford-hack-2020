import { NgModule } from '@angular/core';

import { ShareModule } from '../share/share.module';

import { CurrentTopicComponent } from './current-topic.component';
import { RoutingModule } from './current-topic.routes';

@NgModule({
  declarations: [CurrentTopicComponent],
  imports: [ShareModule, RoutingModule],
})
export class CurrentTopicModule {}
