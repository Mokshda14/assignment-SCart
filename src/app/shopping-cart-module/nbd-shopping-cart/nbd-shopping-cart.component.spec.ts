import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NbdProductsService } from '../../shared/services/nbd-products.service';
import { NbdMessageService } from '../../shared/services/nbd-messaging.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { NbdShoppingCartComponent } from './nbd-shopping-cart.component';

describe('NbdShoppingCartComponent', () => {
  let component: NbdShoppingCartComponent;
  let fixture: ComponentFixture<NbdShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbdShoppingCartComponent ],
      imports: [HttpClientModule],
      providers: [NbdMessageService, NbdShoppingCartComponent]
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
