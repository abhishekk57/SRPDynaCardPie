import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelemetryFilterPage } from './telemetry-filter.page';

describe('TelemetryFilterPage', () => {
  let component: TelemetryFilterPage;
  let fixture: ComponentFixture<TelemetryFilterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TelemetryFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
