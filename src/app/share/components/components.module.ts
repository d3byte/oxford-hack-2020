import { NgModule } from '@angular/core';

import { CustomButtonModule } from '@share/components/custom-button/custom-button.module';
import { TopicCardModule } from '@share/components/topic-card/topic-card.module';

@NgModule({
  exports: [TopicCardModule, CustomButtonModule],
})
export class ComponentsModule {}
