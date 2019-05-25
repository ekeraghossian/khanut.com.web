import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebshopCategoriesComponent } from './webshop-categories.component';

describe('WebshopCategoriesComponent', () => {
  let component: WebshopCategoriesComponent;
  let fixture: ComponentFixture<WebshopCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebshopCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebshopCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
