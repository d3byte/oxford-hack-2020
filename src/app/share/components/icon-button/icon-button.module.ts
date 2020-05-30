import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconButtonComponent } from './icon-button.component';

import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [IconButtonComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [IconButtonComponent],
})
export class IconButtonModule {}
