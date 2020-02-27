import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingFinishedComponent } from './loading-finished.component';

describe('LoadingFinishedComponent', () => {
  let component: LoadingFinishedComponent;
  let fixture: ComponentFixture<LoadingFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
