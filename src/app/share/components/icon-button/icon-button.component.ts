import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() public iconUrl: string;
  @Input() public backgroundColor: string = '#EB4432';
  @Input() public iconColor: string = 'white';
}
