import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EezzComponent } from './eezz.component';

describe('EezzComponent', () => {
  let component: EezzComponent;
  let fixture: ComponentFixture<EezzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EezzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EezzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
