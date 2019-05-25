import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebshopProductsComponent } from './webshop-products.component';

describe('WebshopProductsComponent', () => {
  let component: WebshopProductsComponent;
  let fixture: ComponentFixture<WebshopProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebshopProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebshopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
