import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homewrok1Component } from './homewrok1.component';

describe('Homewrok1Component', () => {
  let component: Homewrok1Component;
  let fixture: ComponentFixture<Homewrok1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homewrok1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homewrok1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
