import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdlSummaryComponent } from './edl-summary.component';

describe('EdlSummaryComponent', () => {
  let component: EdlSummaryComponent;
  let fixture: ComponentFixture<EdlSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdlSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdlSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
