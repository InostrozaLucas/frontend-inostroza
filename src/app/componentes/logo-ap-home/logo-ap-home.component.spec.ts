import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoApHomeComponent } from './logo-ap-home.component';

describe('LogoApHomeComponent', () => {
  let component: LogoApHomeComponent;
  let fixture: ComponentFixture<LogoApHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoApHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoApHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
