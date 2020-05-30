import { Component } from '@angular/core';

@Component({
  selector: 'button[btn-component]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {}
