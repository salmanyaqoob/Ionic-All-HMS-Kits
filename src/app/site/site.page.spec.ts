import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SitePage } from './site.page';

describe('SitePage', () => {
  let component: SitePage;
  let fixture: ComponentFixture<SitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
