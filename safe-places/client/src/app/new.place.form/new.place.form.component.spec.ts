import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { New.Place.FormComponent } from './new.place.form.component';

describe('New.Place.FormComponent', () => {
  let component: New.Place.FormComponent;
  let fixture: ComponentFixture<New.Place.FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New.Place.FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New.Place.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
