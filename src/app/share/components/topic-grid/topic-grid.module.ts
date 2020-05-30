import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TopicCardModule } from '@share/components/topic-card/topic-card.module';

import { TopicGridComponent } from './topic-grid.component';

import { Masonry, MasonryModule } from '@thisissoon/angular-masonry';

const masonryProviders = [{ provide: Masonry, useFactory: () => window['Masonry'] }];

@NgModule({
  declarations: [TopicGridComponent],
  exports: [TopicGridComponent],
  imports: [CommonModule, TopicCardModule, MasonryModule.forRoot(masonryProviders)],
})
export class TopicGridModule {}
