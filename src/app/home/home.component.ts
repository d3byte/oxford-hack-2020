import { Component, OnInit } from '@angular/core';

import { TopicInterface } from '@share/interfaces/topic.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
