import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebshopNavbarComponent } from './webshop-navbar.component';

describe('WebshopNavbarComponent', () => {
  let component: WebshopNavbarComponent;
  let fixture: ComponentFixture<WebshopNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebshopNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebshopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
