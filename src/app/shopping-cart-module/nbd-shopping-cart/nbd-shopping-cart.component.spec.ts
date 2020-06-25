import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbdShoppingCartComponent } from './nbd-shopping-cart.component';

describe('NbdShoppingCartComponent', () => {
  let component: NbdShoppingCartComponent;
  let fixture: ComponentFixture<NbdShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbdShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbdShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
