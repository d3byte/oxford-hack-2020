import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@core/core.module';

import { ComponentsModule } from '@share/components/components.module';

@NgModule({
  declarations: [],
  imports: [],
  exports: [CommonModule, CoreModule, ReactiveFormsModule, ComponentsModule],
})
export class ShareModule {}
