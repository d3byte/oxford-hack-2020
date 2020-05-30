import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from '@share/components/button/button.module';

import { TopicCardComponent } from './topic-card.component';

@NgModule({
  declarations: [TopicCardComponent],
  imports: [CommonModule, ButtonModule],
  exports: [TopicCardComponent],
})
export class TopicCardModule {}
