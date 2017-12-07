import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup.FormComponent } from './signup.form.component';

describe('Signup.FormComponent', () => {
  let component: Signup.FormComponent;
  let fixture: ComponentFixture<Signup.FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signup.FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signup.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
