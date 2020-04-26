import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisTodosComponent } from './lis-todos.component';

describe('LisTodosComponent', () => {
  let component: LisTodosComponent;
  let fixture: ComponentFixture<LisTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
