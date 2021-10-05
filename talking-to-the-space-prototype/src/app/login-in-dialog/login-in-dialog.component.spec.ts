import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInDialogComponent } from './login-in-dialog.component';

describe('LoginInDialogComponent', () => {
  let component: LoginInDialogComponent;
  let fixture: ComponentFixture<LoginInDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginInDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
