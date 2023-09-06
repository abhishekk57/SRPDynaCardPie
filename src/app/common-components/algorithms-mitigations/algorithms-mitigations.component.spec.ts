import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlgorithmsMitigationsComponent } from './algorithms-mitigations.component';

describe('AlgorithmsMitigationsComponent', () => {
  let component: AlgorithmsMitigationsComponent;
  let fixture: ComponentFixture<AlgorithmsMitigationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmsMitigationsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlgorithmsMitigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
