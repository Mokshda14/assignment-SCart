import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbdShoppingHeaderComponent } from './nbd-shopping-header.component';

describe('NbdShoppingHeaderComponent', () => {
  let component: NbdShoppingHeaderComponent;
  let fixture: ComponentFixture<NbdShoppingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbdShoppingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbdShoppingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
