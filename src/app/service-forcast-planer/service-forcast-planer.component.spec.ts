import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceForcastPlanerComponent } from './service-forcast-planer.component';

describe('ServiceForcastPlanerComponent', () => {
  let component: ServiceForcastPlanerComponent;
  let fixture: ComponentFixture<ServiceForcastPlanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceForcastPlanerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceForcastPlanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
