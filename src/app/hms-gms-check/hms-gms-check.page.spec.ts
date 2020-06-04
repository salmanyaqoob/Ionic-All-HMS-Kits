import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HmsGmsCheckPage } from './hms-gms-check.page';

describe('HmsGmsCheckPage', () => {
  let component: HmsGmsCheckPage;
  let fixture: ComponentFixture<HmsGmsCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmsGmsCheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HmsGmsCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
