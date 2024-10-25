import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinzonePipelineComponent } from './winzone-pipeline.component';

describe('WinzonePipelineComponent', () => {
  let component: WinzonePipelineComponent;
  let fixture: ComponentFixture<WinzonePipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinzonePipelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinzonePipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
