import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IapPage } from './iap.page';

describe('IapPage', () => {
  let component: IapPage;
  let fixture: ComponentFixture<IapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
