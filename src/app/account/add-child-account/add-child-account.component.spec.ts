import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChildAccountComponent } from './add-child-account.component';

describe('AddChildAccountComponent', () => {
  let component: AddChildAccountComponent;
  let fixture: ComponentFixture<AddChildAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChildAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChildAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
