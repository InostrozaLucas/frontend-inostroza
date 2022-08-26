import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenfondoHomeComponent } from './imagenfondo-home.component';

describe('ImagenfondoHomeComponent', () => {
  let component: ImagenfondoHomeComponent;
  let fixture: ComponentFixture<ImagenfondoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenfondoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenfondoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
