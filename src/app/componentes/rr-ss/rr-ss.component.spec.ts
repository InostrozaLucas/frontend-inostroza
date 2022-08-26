import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrSsComponent } from './rr-ss.component';

describe('RrSsComponent', () => {
  let component: RrSsComponent;
  let fixture: ComponentFixture<RrSsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrSsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RrSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
