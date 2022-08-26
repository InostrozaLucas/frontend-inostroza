import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaHomeComponent } from './experiencia-home.component';

describe('ExperienciaHomeComponent', () => {
  let component: ExperienciaHomeComponent;
  let fixture: ComponentFixture<ExperienciaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
