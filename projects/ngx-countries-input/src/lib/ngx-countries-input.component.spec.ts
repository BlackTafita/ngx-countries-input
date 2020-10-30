import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCountriesInputComponent } from './ngx-countries-input.component';

describe('NgxCountriesInputComponent', () => {
  let component: NgxCountriesInputComponent;
  let fixture: ComponentFixture<NgxCountriesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCountriesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCountriesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
