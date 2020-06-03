import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeMoveComponent } from './make-move.component';

describe('MakeMoveComponent', () => {
  let component: MakeMoveComponent;
  let fixture: ComponentFixture<MakeMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
