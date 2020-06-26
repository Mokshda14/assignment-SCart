import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import { NbdShoppingMainComponent } from './nbd-shopping-main.component';
import { NbdShoppingNavComponent } from '../nbd-shopping-nav/nbd-shopping-nav.component';
import { NbdProductsService } from '../shared/services/nbd-products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { NbdMessageService } from '../shared/services/nbd-messaging.service';
import { RouterTestingModule } from "@angular/router/testing";
import {ActivatedRoute} from "@angular/router";
import { of } from 'rxjs'

describe('NbdShoppingMainComponent', () => {

  const products = [
    {
			"id": 1,
			"name": "Broccoli",
			"imageSrc": "/vegetable/broccoli.jpg",
			"type": "vegetable",
			"typeId": 5,
			"price": 2.3,
			"qty": 3
		},
		{
			"id": 2,
			"name": "Nutmeg",
			"imageSrc": "/spices/nutmeg.jpg",
			"type": "spices",
			"typeId": 4,
			"price": 3,
			"qty": 3
		},
		{
			"id": 3,
			"name": "Mix Fruits",
			"imageSrc": "/fruit/mixFruits.jpg",
			"type": "fruit",
			"typeId": 3,
			"price": 3.5,
			"qty": 3
		}
  ]
  let component: NbdShoppingMainComponent;
  let fixture: ComponentFixture<NbdShoppingMainComponent>;

  beforeEach(async(() => {
    let productsFakeService = {
      getProducts : () => {
        return of({products})
      }
    }
    TestBed.configureTestingModule({
      declarations: [ NbdShoppingMainComponent, NbdShoppingNavComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ NbdMessageService,
        {
          provide: NbdProductsService,
          useValue: productsFakeService
        }
      ]
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
