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
      description:
        "{\n      title: 'Programming Languages',\n    },{\n      title: 'Programming Languages',\n    },{\n      title: 'Programming Languages',\n    },",
    },
    {
      title: 'Programming Languages',
    },
    {
      title: 'Programming Languages',
      description: "{\n      title: 'Programming Languages',\n    },{\n      title: 'Programming Languages',\n    }",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
