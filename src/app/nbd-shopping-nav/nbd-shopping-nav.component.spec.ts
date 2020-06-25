import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbdShoppingNavComponent } from './nbd-shopping-nav.component';

describe('NbdShoppingNavComponent', () => {
  let component: NbdShoppingNavComponent;
  let fixture: ComponentFixture<NbdShoppingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbdShoppingNavComponent ]
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
