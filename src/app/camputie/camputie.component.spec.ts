import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamputieComponent } from './camputie.component';

describe('CamputieComponent', () => {
  let component: CamputieComponent;
  let fixture: ComponentFixture<CamputieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamputieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamputieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
