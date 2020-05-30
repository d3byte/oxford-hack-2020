import { NgModule } from '@angular/core';

import { ButtonModule } from '@share/components/button/button.module';
import { SearchInputModule } from '@share/components/search-input/search-input.module';
import { TopicCardModule } from '@share/components/topic-card/topic-card.module';

@NgModule({
  exports: [TopicCardModule, ButtonModule, SearchInputModule],
})
export class ComponentsModule {}
