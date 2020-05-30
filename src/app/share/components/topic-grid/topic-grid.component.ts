import { AfterViewInit, Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';

import { TopicInterface } from '@share/interfaces/topic.interface';

import { Masonry, MasonryInstance, MasonryOptions } from '@thisissoon/angular-masonry';

@Component({
  selector: 'topic-grid',
  templateUrl: './topic-grid.component.html',
  styleUrls: ['./topic-grid.component.scss'],
})
export class TopicGridComponent implements AfterViewInit {
  @ViewChild('grid') private grid: ElementRef;

  @Input() public topics: TopicInterface[] = [];

  public masonryInstance: MasonryInstance;

  constructor(@Inject(Masonry) private masonry) {}

  ngAfterViewInit() {
    this.setMasonryGrid();
  }

  private setMasonryGrid(): void {
    const options: MasonryOptions = {
      itemSelector: 'topic-card',
      columnWidth: 'topic-card',
      gutter: 20,
      fitWidth: true,
    };
    this.masonryInstance = new this.masonry(this.grid.nativeElement, options);
  }

  layout() {
    this.masonryInstance.layout();
  }

  ngOnDestroy() {
    this.masonryInstance.destroy();
  }
}
