import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressfreetipsComponent } from './stressfreetips.component';

describe('StressfreetipsComponent', () => {
  let component: StressfreetipsComponent;
  let fixture: ComponentFixture<StressfreetipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StressfreetipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StressfreetipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
