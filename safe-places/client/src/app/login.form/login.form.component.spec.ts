import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login.FormComponent } from './login.form.component';

describe('Login.FormComponent', () => {
  let component: Login.FormComponent;
  let fixture: ComponentFixture<Login.FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login.FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
