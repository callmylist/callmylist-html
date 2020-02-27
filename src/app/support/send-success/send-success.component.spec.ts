import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSuccessComponent } from './send-success.component';

describe('SendSuccessComponent', () => {
  let component: SendSuccessComponent;
  let fixture: ComponentFixture<SendSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
