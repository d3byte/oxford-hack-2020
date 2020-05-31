import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

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

  public navigate(): void {
    this.router.navigateByUrl('/topics/1');
  }
}
