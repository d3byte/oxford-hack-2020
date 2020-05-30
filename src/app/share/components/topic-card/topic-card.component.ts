import { Component, Input, OnInit } from '@angular/core';

import { TopicCardColors } from '@share/components/topic-card/topic-card-colors.type';
import { TopicInterface } from '@share/interfaces/topic.interface';

@Component({
  selector: 'topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent implements OnInit {
  @Input() public topic: TopicInterface;
  @Input() public backgroundColor?: TopicCardColors;

  ngOnInit() {
    this.setDefaultBackgroundColor();
  }

  private setDefaultBackgroundColor(): void {
    if (!this.backgroundColor && !this.topic.previewImg) {
      this.backgroundColor = '#1287A8';
    }
  }
}
