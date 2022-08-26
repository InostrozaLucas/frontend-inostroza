import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioHomeComponent } from './porfolio-home.component';

describe('PorfolioHomeComponent', () => {
  let component: PorfolioHomeComponent;
  let fixture: ComponentFixture<PorfolioHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorfolioHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfolioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
