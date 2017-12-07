import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List.PlacesComponent } from './list.places.component';

describe('List.PlacesComponent', () => {
  let component: List.PlacesComponent;
  let fixture: ComponentFixture<List.PlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List.PlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List.PlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
