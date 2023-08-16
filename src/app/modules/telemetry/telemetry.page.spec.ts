import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelemetryPage } from './telemetry.page';

describe('TelemetryPage', () => {
  let component: TelemetryPage;
  let fixture: ComponentFixture<TelemetryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TelemetryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
