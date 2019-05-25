import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebshopUserbarComponent } from './webshop-userbar.component';

describe('WebshopUserbarComponent', () => {
  let component: WebshopUserbarComponent;
  let fixture: ComponentFixture<WebshopUserbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebshopUserbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebshopUserbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
