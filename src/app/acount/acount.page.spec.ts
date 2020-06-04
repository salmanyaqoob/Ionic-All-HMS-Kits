import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcountPage } from './acount.page';

describe('AcountPage', () => {
  let component: AcountPage;
  let fixture: ComponentFixture<AcountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
