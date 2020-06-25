import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import { NbdShoppingMainComponent } from './nbd-shopping-main.component';
import { NbdProductsService } from '../nbd-products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { NbdMessageService } from '../nbd-messaging.service';
import { RouterTestingModule } from "@angular/router/testing";
import {ActivatedRoute} from "@angular/router";

describe('NbdShoppingMainComponent', () => {
  let component: NbdShoppingMainComponent;
  let fixture: ComponentFixture<NbdShoppingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbdShoppingMainComponent ],
      imports: [HttpClientModule, { provide: ActivatedRoute, useValue: { params: {typeId : 123} } }],
      providers: [ NbdProductsService, NbdProductsService, ActivatedRoute ]
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
