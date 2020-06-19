import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdsPage } from './ads.page';

describe('AdsPage', () => {
  let component: AdsPage;
  let fixture: ComponentFixture<AdsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
