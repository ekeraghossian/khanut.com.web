import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebshopSupplierAddProductComponent } from './webshop-supplier-add-product.component';

describe('WebshopSupplierAddProductComponent', () => {
  let component: WebshopSupplierAddProductComponent;
  let fixture: ComponentFixture<WebshopSupplierAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebshopSupplierAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebshopSupplierAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
