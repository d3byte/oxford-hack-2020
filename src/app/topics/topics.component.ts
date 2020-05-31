import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
})
export class TopicsComponent implements OnInit {
  public toggleSearch = false;

  constructor() {}

  ngOnInit(): void {}

  public toggle(): void {
    this.toggleSearch = !this.toggleSearch;
  }
}
