import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckGameComponent } from './check-game.component';

describe('CheckGameComponent', () => {
  let component: CheckGameComponent;
  let fixture: ComponentFixture<CheckGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
