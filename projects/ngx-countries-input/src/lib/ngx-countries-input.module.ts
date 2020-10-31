import { NgModule } from '@angular/core';
import { NgxCountriesInputComponent } from './ngx-countries-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NgxCountriesInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [NgxCountriesInputComponent]
})
export class NgxCountriesInputModule { }
