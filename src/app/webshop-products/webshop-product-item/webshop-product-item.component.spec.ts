import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebshopProductItemComponent } from './webshop-product-item.component';

describe('WebshopProductItemComponent', () => {
  let component: WebshopProductItemComponent;
  let fixture: ComponentFixture<WebshopProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebshopProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebshopProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
