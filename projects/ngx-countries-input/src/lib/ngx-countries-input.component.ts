import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-countries-input',
  template: `
    <p>NGX-COUNTRIES-INPUT</p>
    <div class="ngx-countries-input">
      <div class="ngx-countries-input__input-block">
        <input class="ngx-countries-input__input-block__input" [formControl]="countriesControl"/>
      </div>
      <div class="ngx-countries-input__result-block">

      </div>
    </div>
  `,
  styles: []
})
export class NgxCountriesInputComponent implements OnInit {

  @Input() control: FormControl;

  countriesControl: FormControl = new FormControl(null);

  constructor() { }

  ngOnInit() {

  }

}
