import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoReduxComponent } from './demo-redux.component';

describe('DemoReduxComponent', () => {
  let component: DemoReduxComponent;
  let fixture: ComponentFixture<DemoReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
