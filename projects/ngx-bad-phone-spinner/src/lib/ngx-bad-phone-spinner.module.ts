import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxBadPhoneSpinnerComponent } from './ngx-bad-phone-spinner/ngx-bad-phone-spinner.component';
import { RangeModule } from './range/range.module';

@NgModule({
  declarations: [
    NgxBadPhoneSpinnerComponent
  ],
  exports: [
    NgxBadPhoneSpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RangeModule
  ]
})
export class NgxBadPhoneSpinnerModule { }
