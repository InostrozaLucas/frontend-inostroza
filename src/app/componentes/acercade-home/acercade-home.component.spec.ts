import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadeHomeComponent } from './acercade-home.component';

describe('AcercadeHomeComponent', () => {
  let component: AcercadeHomeComponent;
  let fixture: ComponentFixture<AcercadeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercadeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
