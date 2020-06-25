import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbdShoppingMainComponent } from './nbd-shopping-main.component';

describe('NbdShoppingMainComponent', () => {
  let component: NbdShoppingMainComponent;
  let fixture: ComponentFixture<NbdShoppingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbdShoppingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbdShoppingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
