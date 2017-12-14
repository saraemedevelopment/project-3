import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { New.ReviewComponent } from './new.review.component';

describe('New.ReviewComponent', () => {
  let component: New.ReviewComponent;
  let fixture: ComponentFixture<New.ReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New.ReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New.ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
