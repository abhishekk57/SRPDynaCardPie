import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelemetryDetailsPage } from './telemetry-details.page';

describe('TelemetryDetailsPage', () => {
  let component: TelemetryDetailsPage;
  let fixture: ComponentFixture<TelemetryDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TelemetryDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
