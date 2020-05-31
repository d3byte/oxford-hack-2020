import { Component, Input, OnInit } from '@angular/core';

import { TopicInterface } from '@share/interfaces/topic.interface';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
})
export class TopicsComponent implements OnInit {
  constructor() {}
  public toggleSearch = false;

  public topics: TopicInterface[] = [
    {
      title: 'Programming Languages',
      description: 'A brief description of the topic',
    },
    {
      title: 'Programming Languages',
    },
    {
      title: 'Programming Languages',
      description: 'A brief description of the topic A brief description of the topic',
    },
    {
      title: 'Programming Languages',
      description: 'A brief description of the topic',
    },
    {
      title: 'Programming Languages',
    },
    {
      title: 'Programming Languages',
      description: 'A brief description of the topic',
    },
    {
      title: 'Programming Languages',
      description: 'A brief description of the topic A brief description of the topic A brief description of the topic A brief description of the topic',
    },
    {
      title: 'Programming Languages',
    },
    {
      title: 'Programming Languages',
      description: 'A brief description of the topic',
    },
    {
      title: 'Programming Languages',
      description: 'A brief description of the topic',
    },
    {
      title: 'Programming Languages',
    },
    {
      title: 'Programming Languages',
      description: 'A brief description of the topic',
    },
    {
      title: 'Programming Languages',
      description: 'A brief description of the topic',
    },
    {
      title: 'Programming Languages',
    },
    {
      title: 'Programming Languages',
      description: 'A brief description of the topic A brief description of the topic',
    },
    {
      title: 'Programming Languages',
      description: 'A brief description of the topic A brief description of the topic A brief description of the topic',
    },
    {
      title: 'Programming Languages',
    },
    {
      title: 'Programming Languages',
      description: 'A brief description of the topic',
    },
  ];

  ngOnInit(): void {}

  public toggle(): void {
    this.toggleSearch = !this.toggleSearch;
  }
}
