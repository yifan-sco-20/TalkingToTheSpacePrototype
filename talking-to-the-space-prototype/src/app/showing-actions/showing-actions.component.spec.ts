import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingActionsComponent } from './showing-actions.component';

describe('ShowingActionsComponent', () => {
  let component: ShowingActionsComponent;
  let fixture: ComponentFixture<ShowingActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowingActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
