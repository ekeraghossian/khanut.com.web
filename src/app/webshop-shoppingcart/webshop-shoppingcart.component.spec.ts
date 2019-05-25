import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebshopShoppingcartComponent } from './webshop-shoppingcart.component';

describe('WebshopShoppingcartComponent', () => {
  let component: WebshopShoppingcartComponent;
  let fixture: ComponentFixture<WebshopShoppingcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebshopShoppingcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebshopShoppingcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
