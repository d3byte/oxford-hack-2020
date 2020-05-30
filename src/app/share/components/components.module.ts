import { NgModule } from '@angular/core';

import { ButtonModule } from '@share/components/button/button.module';
import { IconButtonModule } from '@share/components/icon-button/icon-button.module';
import { TopicCardModule } from '@share/components/topic-card/topic-card.module';

@NgModule({
  exports: [TopicCardModule, ButtonModule, IconButtonModule],
})
export class ComponentsModule {}
