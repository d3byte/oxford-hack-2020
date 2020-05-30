import { Component, Input, OnInit } from '@angular/core';

import { topicCardColors } from '@share/components/topic-card/topic-card-colors.const';
import { TopicCardColor } from '@share/components/topic-card/topic-card-colors.type';
import { TopicInterface } from '@share/interfaces/topic.interface';

@Component({
  selector: 'topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent implements OnInit {
  @Input() public topic: TopicInterface;
  @Input() public backgroundColor?: TopicCardColor;

  ngOnInit() {
    this.setDefaultBackgroundColor();
  }

  private setDefaultBackgroundColor(): void {
    if (!this.backgroundColor && !this.topic.previewImg) {
      this.backgroundColor = this.getRandomColor();
    }
  }

  private getRandomColor(): TopicCardColor {
    const cardIndex: number = Math.floor(Math.random() * 6);
    return topicCardColors[cardIndex];
  }
}
