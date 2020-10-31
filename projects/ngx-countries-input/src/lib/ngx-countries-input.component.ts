import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxCountriesInputService } from './ngx-countries-input.service';
import { Observable, Subscription } from 'rxjs';
import { NgxCountry } from './country.interface';
import { shareReplay, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-countries-input',
  template: `
    <p>NGX-COUNTRIES-INPUT</p>
    <div class="ngx-countries-input">
      <div class="ngx-countries-input__input-block">
        <input
          class="ngx-countries-input__input-block__input"
          [formControl]="countriesControl"
          (focus)="onFocus()"
        />
      </div>
      <div class="ngx-countries-input__result-block" *ngIf="isFocused">
        <ul>
          <li *ngFor="let country of (countries$ | async)" (click)="selectOption(country)">{{country.name}}</li>
        </ul>
      </div>
    </div>
  `,
  styles: []
})
export class NgxCountriesInputComponent implements OnInit, OnDestroy {

  @Input() control: FormControl;

  countriesControl: FormControl = new FormControl(null);

  countries$: Observable<NgxCountry[]>;

  countriesSub$: Subscription;

  isFocused = false;

  constructor(private countriesService: NgxCountriesInputService, private eRef: ElementRef) {
  }

  ngOnInit(): void {
    this.countries$ = this.countriesControl.valueChanges
      .pipe(
        switchMap((input) => this.countriesService.getCountries(input)),
        shareReplay(),
      );

    this.countries$.subscribe();
  }

  ngOnDestroy(): void {
    this.countriesSub$.unsubscribe();
  }

  onFocus(): void {
    this.countriesControl.patchValue(null);
    this.isFocused = true;
  }

  selectOption(country: NgxCountry) {
    this.control.patchValue(country.name);
    this.countriesControl.patchValue(country.name);
    this.isFocused = false;
  }

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
    this.isFocused = false;
    this.control.patchValue(null);
    }
  }

}
