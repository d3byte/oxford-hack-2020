import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchInputComponent } from './search-input.component';

import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [SearchInputComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [SearchInputComponent],
})
export class SearchInputModule {}
