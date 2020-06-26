import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbdShoppingFooterComponent } from './nbd-shopping-footer.component';

describe('NbdShoppingFooterComponent', () => {
  let component: NbdShoppingFooterComponent;
  let fixture: ComponentFixture<NbdShoppingFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbdShoppingFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbdShoppingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
