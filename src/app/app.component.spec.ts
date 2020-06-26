import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NbdShoppingNavComponent } from './nbd-shopping-nav/nbd-shopping-nav.component';
import { NbdShoppingHeaderComponent } from './nbd-shopping-header/nbd-shopping-header.component';
import { NbdShoppingFooterComponent } from './nbd-shopping-footer/nbd-shopping-footer.component';
import { NbdShoppingMainComponent } from './nbd-shopping-main/nbd-shopping-main.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NbdShoppingHeaderComponent,
        NbdShoppingFooterComponent,
        NbdShoppingNavComponent,
        NbdShoppingMainComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'nbd-shopping-cart'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nbd-shopping-cart');
  });
});
