import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrSsHomeComponent } from './rr-ss-home.component';

describe('RrSsHomeComponent', () => {
  let component: RrSsHomeComponent;
  let fixture: ComponentFixture<RrSsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrSsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RrSsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
