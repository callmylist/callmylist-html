import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizePriceComponent } from './authorize-price.component';

describe('AuthorizePriceComponent', () => {
  let component: AuthorizePriceComponent;
  let fixture: ComponentFixture<AuthorizePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
