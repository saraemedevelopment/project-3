import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Place.DetailsComponent } from './place.details.component';

describe('Place.DetailsComponent', () => {
  let component: Place.DetailsComponent;
  let fixture: ComponentFixture<Place.DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Place.DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Place.DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
