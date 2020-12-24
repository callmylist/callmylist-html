import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCampaignsComponent } from './text-campaigns.component';

describe('TextCampaignsComponent', () => {
  let component: TextCampaignsComponent;
  let fixture: ComponentFixture<TextCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
