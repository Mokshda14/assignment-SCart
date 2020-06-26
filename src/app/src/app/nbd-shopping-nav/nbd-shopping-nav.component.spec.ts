import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { NbdShoppingNavComponent } from './nbd-shopping-nav.component';

describe('NbdShoppingNavComponent', () => {
  let component: NbdShoppingNavComponent;
  let fixture: ComponentFixture<NbdShoppingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbdShoppingNavComponent ],
      imports: [ RouterTestingModule ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbdShoppingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
