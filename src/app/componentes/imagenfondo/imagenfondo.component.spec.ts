import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenfondoComponent } from './imagenfondo.component';

describe('ImagenfondoComponent', () => {
  let component: ImagenfondoComponent;
  let fixture: ComponentFixture<ImagenfondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenfondoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenfondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
