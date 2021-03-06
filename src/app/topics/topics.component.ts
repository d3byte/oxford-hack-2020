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
  public description = false;

  public topics: TopicInterface[] = [
    {
      title: 'JavaScript',
      description:
        'JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one.',
    },
    {
      title: 'Mobile Web',
    },
    {
      title: 'UX',
      description: 'The goal of UX design is to create as good experience in users as it’s possible by making simultaneous use of multiple fields.',
    },
    {
      title: 'Coding books',
    },
    {
      title: 'Dev Platforms',
    },
    {
      title: 'Frontend',
      description:
        'Front-end web development is the practice of producing HTML, CSS and JavaScript for a website so that a user can see and interact with them directly.',
    },
    {
      title: 'PHP',
      description:
        'The PHP Hypertext Preprocessor (PHP) is a programming language that allows web developers to create dynamic content that interacts with ...',
    },
    {
      title: 'Tutorials',
    },
    {
      title: 'Freelance',
      description: 'Become a Pro with these valuable skills. Start Your Course Today.',
    },
    {
      title: 'Backend',
      description: 'A brief description of the topic',
    },
    {
      title: 'Web design',
    },
    {
      title: 'Web apps',
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
