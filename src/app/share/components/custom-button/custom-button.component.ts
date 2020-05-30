import { Component, Input } from '@angular/core';

import { ButtonInterface } from '@share/interfaces/button.interface';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input() public button: ButtonInterface;
}
